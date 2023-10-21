#include <WiFi.h>
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>


String apiKey = "BZNMMT3RXCPFZIYJ";


const char* ssid = "HUAWEI-Z8xH";
const char* pass = "XGxfzRPG";
const char* server = "api.thingspeak.com";

RF24 radio(4, 5);
const uint64_t address = 0xF0F0F0F0E1LL;

struct MyVariable
{
  byte nitrogen;
  byte phosphorous;
  byte potassium;
  byte Temperature;
  byte Humidity;
  byte ph;
};
MyVariable variable;

WiFiClient client;

void setup()
{
  Serial.begin(115200);
  radio.begin();                  //Starting the Wireless communication
  radio.openReadingPipe(0, address);   //Setting the address at which we will receive the data
  radio.setPALevel(RF24_PA_MIN);       //You can set this as minimum or maximum depending on the distance between the transmitter and receiver.
  radio.startListening();              //This sets the module as receiver

  Serial.println("Receiver Started....");
  Serial.print("Connecting to ");
  Serial.println(ssid);
  Serial.println();
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
}

int recvData()
{
  if ( radio.available() )
  {
    radio.read(&variable, sizeof(MyVariable));
    return 1;
  }
  return 0;
}


void loop()
{
  if (recvData())
  {

    Serial.println("Data Received:");

    Serial.print("Nitrogen: ");
    Serial.print(variable.nitrogen);
    Serial.println(" mg/kg");
    Serial.print("Phosphorous: ");
    Serial.print(variable.phosphorous);
    Serial.println(" mg/kg");
    Serial.print("Potassium: ");
    Serial.print(variable.potassium);
    Serial.println(" mg/kg");
    Serial.println("temperature");
    Serial.print(variable.Temperature);
    Serial.println("humidity");
    Serial.print(variable.Humidity);
    Serial.println("ph value");
    Serial.print(variable.ph);

    Serial.println();

    if (client.connect(server, 80))
    {
      String postStr = apiKey;
      postStr += "&field1=";
      postStr += String(variable.nitrogen);
      postStr += "&field2=";
      postStr += String(variable.phosphorous);
      postStr += "&field3=";
      postStr += String(variable.potassium);
      postStr += "&field4=";
      postStr += String(variable.Temperature);
      postStr += "&field5=";
      postStr += String(variable.Humidity);
      postStr += "&field6=";
      postStr += String(variable.ph);
      postStr += "\r\n\r\n\r\n\r\n\r\n\r\n";

      client.print("POST /update HTTP/1.1\n");
      client.print("Host: api.thingspeak.com\n");
      client.print("Connection: close\n");
      client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\n");
      client.print("Content-Type: application/x-www-form-urlencoded\n");
      client.print("Content-Length: ");
      client.print(postStr.length());
      client.print("\n\n");
      client.print(postStr);
      delay(1000);
      Serial.println("Data Sent to Server");
    }
    client.stop();
  }
}
