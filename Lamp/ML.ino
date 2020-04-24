#include "FastLED.h"
#define NUM_LEDS 56
#define DATA_PIN 12
char blueToothVal;           //value sent over via bluetooth
char lastValue;              //stores last state of device (on/off)

CRGB leds[NUM_LEDS];

void setup() {
  Serial.begin(9600); 
  pinMode(12,OUTPUT);
  FastLED.addLeds<WS2811, DATA_PIN, RGB>(leds, NUM_LEDS);
  start();
}
void loop() {
  if(Serial.available())
  {//if there is data being recieved
    blueToothVal=Serial.read(); //read it
  }
  if (blueToothVal=='n') // включення лампи
  {//if value from bluetooth serial is n
    for(int i = 0; i < NUM_LEDS;i++){
      leds[i] = CRGB::White;  
    }
    if (lastValue!='n'){
      Serial.println(F("LED is on")); //print LED is on
      FastLED.show();
    }
    lastValue=blueToothVal;
  }
  else if (blueToothVal=='f') // виключення лампи
  {//if value from bluetooth serial is n
    for(int i = 0; i < NUM_LEDS;i++){
      leds[i] = CRGB::Black;  
    }
    if (lastValue!='f'){
      Serial.println(F("LED is off")); //print LED is on
      FastLED.show();
    }
    lastValue=blueToothVal;
  }
  else if (blueToothVal=='s') // запуск лампи
  {//if value from bluetooth serial is 
    if (lastValue!='s'){
      Serial.println(F("LED is started")); //print LED is on
      start();
    }
    lastValue=blueToothVal;
  }
  else
  {//if value from bluetooth serial is 
    if (lastValue!=blueToothVal){
      Serial.println(blueToothVal);
      color(blueToothVal);
    }
    lastValue=blueToothVal;
  }
  delay(1000);
}

void start () // При запуску
{
  for(int i = 0; i < NUM_LEDS; i++)
  {
    leds[i] = CRGB::White;
    FastLED.show();
    delay(30);
  }
}

void color (char color)
{
  switch (color)
  {
    case 'r': // red
    {
      for(int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Green;
      }
      FastLED.show();
      break;
    }
    case 'g': // green
    {
      for(int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Red;
      }
      FastLED.show();
      break;
    }
    case 'w': // white
    {
      for(int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::White;
      }
      FastLED.show();
      break;
    }
    case 'o': // orange
    {
      for(int i = 0; i < NUM_LEDS; i++) {
        leds[i] = CRGB::Yellow;
      }
      FastLED.show();
      break;
    }
  }
}
