#include <SPI.h>
#include <SoftwareSerial.h>
#include <nRF24L01.h>
#include <RF24.h>
#include <dht.h>

dht DHT;

#define DHT11_PIN 5
RF24 radio(9, 10); // CE, CSN on Blue Pill
const uint64_t address = 0xF0F0F0F0E1LL;


#define RE 8
#define DE 7
const byte code[] = {0x01, 0x03, 0x00, 0x1e, 0x00, 0x03, 0x65, 0xCD};
byte values[11];
const byte phvalue[] = {0x01, 0x03, 0x00, 0x00, 0x00, 0x01, 0x84, 0x0A};
byte values1[11];
SoftwareSerial mod(2, 3);

int nitrogen;
int phosphorous;
int potassium;
int Temperature;
int Humidity;
int ph;

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


void setup()
{
  Serial.begin(9600);
  mod.begin(9600);
  radio.begin();                  //Starting the Wireless communication
  radio.openWritingPipe(address); //Setting the address where we will send the data
  radio.setPALevel(RF24_PA_MIN);  //You can set it as minimum or maximum depending on the distance between the transmitter and receiver.
  radio.stopListening();          //This sets the module as transmitter
  pinMode(RE, OUTPUT);
  pinMode(DE, OUTPUT);
  
}

void loop()
{
  byte val;
  digitalWrite(DE, HIGH);
  digitalWrite(RE, HIGH);
  delay(10);
  if (mod.write(code, sizeof(code)) == 8)
  {
    digitalWrite(DE, LOW);
    digitalWrite(RE, LOW);
    for (byte i = 0; i < 11; i++)
    {
      //Serial.print(mod.read(),HEX);
      values[i] = mod.read();
      Serial.print(values[i], HEX);
    }
    Serial.println();
  }
  nitrogen = values[4];
  phosphorous = values[6];
  potassium = values[8];
  delay(1500);

  int chk = DHT.read11(DHT11_PIN);
  Temperature=DHT.temperature;
  Humidity=DHT.humidity;
  delay(1500);

  digitalWrite(DE, HIGH);
  digitalWrite(RE, HIGH);
  delay(10);
  if (mod.write(phvalue, sizeof(phvalue)) == 8)
  {
    digitalWrite(DE, LOW);
    digitalWrite(RE, LOW);
    for (byte i = 0; i < 11; i++)
    {
      values1[i] = mod.read();
      Serial.print(values1[i], HEX);
    }
    Serial.println();
  }
  ph = float(values1[4]) / 10;
  delay(1500);

  variable.nitrogen = nitrogen;
  variable.phosphorous = phosphorous;
  variable.potassium = potassium;
  variable.Temperature = Temperature;
  variable.Humidity = Humidity;
  variable.ph=ph;
  delay(1500);
  


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
  Serial.println(" *C");
  Serial.println("humidity");
  Serial.print(variable.Humidity);
  Serial.println("%");
  Serial.println("ph value");
  Serial.print(variable.ph);
  Serial.println("%");
  
  

  Serial.println();
  radio.write(&variable, sizeof(MyVariable));

  Serial.println("Data Packet Sent");
  Serial.println("");
  delay(10000);
}
