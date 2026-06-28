// IoT Assistant Training Portfolio Data Store
// Easily update this file to modify journal entries, labs, or projects.

const journalData = [
  {
    day: 1,
    theme: "Introduction & Fundamentals",
    theory: "Introduction to Internet of Things (IoT), its architecture, and role in modern industries. Understood the core concepts of Embedded Systems and how hardware connects to the virtual world. Overview of the PMKVY Skill India Mission goals.",
    lab: "Introduction to the Arduino IDE workspace, installing necessary board drivers, and setting up communication ports.",
    concepts: ["IoT Architecture", "Embedded Systems Basics", "Arduino Ecosystem", "Microcontrollers vs Microprocessors"],
    tools: ["Arduino IDE", "CH340 USB Driver", "Arduino Uno Board"],
    skills: ["IDE Configuration", "Serial Port Debugging"],
    notes: "First day of training at IIIT Kottayam. The instructor gave a high-level overview of the IoT career landscape.",
    status: "Completed"
  },
  {
    day: 2,
    theme: "Basic Electronics & Ohm's Law",
    theory: "Fundamentals of electricity: Voltage, Current, Resistance, and Ohm's Law (V = IR). Understood components in series vs parallel circuits and the importance of current-limiting resistors.",
    lab: "Measuring resistance using a digital multimeter. Building a simple LED circuit on a breadboard and testing voltage drops.",
    concepts: ["Ohm's Law", "Breadboard Internal Layout", "Series vs Parallel Connections", "Multimeter Calibration"],
    tools: ["Digital Multimeter", "Breadboard", "LED", "Resistors (220Ω, 1kΩ, 10kΩ)", "Jumper Wires"],
    skills: ["Circuit Prototyping", "Multimeter Measurement", "Component Identification"],
    notes: "Calculating the right resistor value is essential to prevent burning out LEDs.",
    status: "Completed"
  },
  {
    day: 3,
    theme: "Microcontroller GPIO Programming",
    theory: "Deep dive into ATmega328P microcontroller pinout. Understanding General Purpose Input Output (GPIO) pins, Digital vs Analog signals, and basic C-programming keywords for hardware control.",
    lab: "Writing Arduino C scripts to blink an onboard LED and creating a 3-way Traffic Light simulator sequence.",
    concepts: ["GPIO Pins", "Digital Write", "Delay Functions", "Logic HIGH/LOW states", "Finite State Timing"],
    tools: ["Arduino Uno", "Traffic Light LED Module", "Breadboard", "Jumper Wires"],
    skills: ["Arduino Programming (C/C++)", "Traffic Signal Logic", "Hardware Debugging"],
    notes: "First time writing code that interacts with real physical elements! Traffic light timing functions are fun to configure.",
    status: "Completed"
  },
  {
    day: 4,
    theme: "Sensors & Analog Inputs",
    theory: "Introduction to sensors. Understanding Analog-to-Digital Converters (ADC) and how the Arduino translates physical variables (light, heat) into a 10-bit digital scale (0 to 1023).",
    lab: "Interfacing a Potentiometer and a Light Dependent Resistor (LDR). Reading analog values and displaying them in real-time on the Serial Monitor.",
    concepts: ["Analog Signals", "10-bit ADC Resolution", "Serial Baud Rate", "Voltage Divider Circuit"],
    tools: ["Arduino Uno", "LDR Sensor", "10k Potentiometer", "220Ω Resistor", "USB Cable"],
    skills: ["Analog Read Functions", "Serial Monitor Debugging", "Sensor Calibration"],
    notes: "The Serial Monitor is extremely useful for seeing the values change instantly when covering/uncovering the LDR.",
    status: "Completed"
  },
  {
    day: 5,
    theme: "Actuators & Pulse Width Modulation",
    theory: "How to output pseudo-analog voltages using Pulse Width Modulation (PWM). Understanding duty cycles and controlling power delivery to actuators (fading LEDs, controlling servo motors).",
    lab: "Building a fade-in/fade-out LED circuit and interfacing an SG90 Servo Motor to sweep from 0 to 180 degrees using PWM control.",
    concepts: ["Pulse Width Modulation (PWM)", "Duty Cycle Calculations", "Servo Motor Angles", "Servo.h Library"],
    tools: ["Arduino Uno", "SG90 Servo Motor", "LED", "Jumper Wires"],
    skills: ["PWM Output Programming", "Servo Interfacing", "External Library Usage"],
    notes: "Servos need stable 5V power. Learnt how external libraries make motor controls straightforward.",
    status: "Completed"
  },
  {
    day: 6,
    theme: "Digital Communication (UART)",
    theory: "Introduction to Serial Communication protocols. Difference between Synchronous and Asynchronous transmission. Standard baud rates, data frames, start/stop bits.",
    lab: "Sending text commands from the Serial Monitor (PC) to control physical pins (e.g., typing 'ON' to turn on an LED, 'OFF' to turn it off).",
    concepts: ["UART Protocol", "Serial Event Handlers", "String Parsing in C", "ASCII character decoding"],
    tools: ["Arduino Uno", "LEDs", "Breadboard"],
    skills: ["Serial Communication Code", "ASCII Parsing"],
    notes: "We can control hardware using our laptop keyboards directly through the USB-UART interface.",
    status: "Completed"
  },
  {
    day: 7,
    theme: "Sensors: Temperature & Humidity",
    theory: "Study of capacitive humidity sensors and thermistors. Working principle of the DHT11 sensor and its single-wire proprietary digital communication protocol.",
    lab: "Installing the DHT11 Sensor library, reading temperature/humidity indices, and logging values to serial monitor.",
    concepts: ["Digital Data Packets", "Single-wire Protocol", "Relative Humidity", "Sensor Threshold Logic"],
    tools: ["DHT11 Sensor Module", "Arduino Uno", "Jumper Wires"],
    skills: ["Library Installation", "Data Sheet Interpretation", "Digital Sensor Interfacing"],
    notes: "The DHT11 has a 1-second delay requirement between reads to provide stable output data.",
    status: "Completed"
  },
  {
    day: 8,
    theme: "Distance Sensing: Ultrasonic HC-SR04",
    theory: "Working principle of sonar/ultrasonic ranging. Formula for converting echo duration into distance: Distance = (Time * Speed of Sound) / 2.",
    lab: "Connecting an HC-SR04 Ultrasonic sensor to trigger a warning buzzer if an object gets closer than 15 cm (Proximity Alarm).",
    concepts: ["Sound Waves & Reflections", "Pulse Timing (pulseIn)", "Proximity Sensing", "Piezo Buzzer control"],
    tools: ["HC-SR04 Ultrasonic Sensor", "Piezo Buzzer", "Arduino Uno", "Breadboard"],
    skills: ["Time-to-Distance conversion math", "Acoustic Sensor Application"],
    notes: "This sensor is the core component for obstacle-avoidance robots and smart parking systems.",
    status: "Completed"
  },
  {
    day: 9,
    theme: "Liquid Crystal Displays (LCD)",
    theory: "Interface protocols for characters display. Register Select (RS) pins, Read/Write, and Data lines. Difference between 8-bit mode, 4-bit mode, and the I2C interface adapter.",
    lab: "Interfacing a 16x2 character LCD with an I2C converter. Displaying custom welcoming texts, temperature, and humidity levels dynamically.",
    concepts: ["I2C Bus Addressing", "LCD Register Commands", "16x2 Character Grid Mapping", "LiquidCrystal_I2C library"],
    tools: ["16x2 I2C LCD Screen", "Arduino Uno", "DHT11 Sensor", "Breadboard"],
    skills: ["I2C Wiring", "LCD Programming", "Multi-component Integration"],
    notes: "I2C is incredibly helpful as it reduces the required pins from 12 down to just 2 (SDA and SCL).",
    status: "Completed"
  },
  {
    day: 10,
    theme: "PIR Motion & Infrared Sensors",
    theory: "Passive Infrared (PIR) sensing. Detection of infrared heat emissions from humans and animals. Understanding trigger delays and sensitivity adjustments via onboard potentiometers.",
    lab: "Building an automated hallway lighting system that turns on a lamp/LED for 10 seconds when motion is detected.",
    concepts: ["Infrared Radiation", "PIR Trigger Modes", "State Change Detection", "Timeout Interrupt Logic"],
    tools: ["PIR Motion Sensor", "Arduino Uno", "LED", "Breadboard"],
    skills: ["Motion Sensor Calibration", "State-machine Programming"],
    notes: "Adjusting the onboard orange pots changes sensitivity and output pulse duration.",
    status: "Completed"
  },
  {
    day: 11,
    theme: "Relays & High Voltage Interfacing",
    theory: "How low-voltage microcontrollers control high-voltage AC/DC appliances safely. Electro-magnetic relays, coil activation, NC/NO/Common contacts, and optocoupler isolation.",
    lab: "Connecting a 5V relay module to turn on a 12V DC bulb via Arduino programming based on LDR inputs.",
    concepts: ["Optoisolators", "Normally Open / Normally Closed", "Coil Magnetization", "Electrical Safety Rules"],
    tools: ["5V Relay Module", "12V DC Lamp", "Arduino Uno", "Battery", "LDR Circuit"],
    skills: ["Relay Interfacing", "Safety-first Prototyping"],
    notes: "High voltage circuits must always be double checked. Optocouplers protect the Arduino from inductive back-EMF.",
    status: "Completed"
  },
  {
    day: 12,
    theme: "DC Motor Controls & H-Bridge",
    theory: "Working principle of DC motors. Why microcontrollers cannot drive motors directly (high current draw). H-Bridge circuits, back-EMF, and the L298N motor driver module.",
    lab: "Interfacing an L298N driver to control the direction and speed (using PWM) of a 9V toy DC motor.",
    concepts: ["H-Bridge Architecture", "L298N Pinouts", "Bi-directional Motor Control", "Flyback Diodes"],
    tools: ["L298N Motor Driver", "9V DC Gear Motor", "Arduino Uno", "External Battery Pack"],
    skills: ["Motor Driver Configuration", "Speed & Direction Control"],
    notes: "Always link the grounds of the external power supply and the Arduino to establish a common reference.",
    status: "Completed"
  },
  {
    day: 13,
    theme: "Communication Protocols: I2C & SPI",
    theory: "Comparison between I2C (Inter-Integrated Circuit) and SPI (Serial Peripheral Interface). Pin architectures: SDA/SCL vs MOSI/MISO/SCK/SS. Master-slave network structure.",
    lab: "Configuring an Arduino to talk to two I2C devices simultaneously (LCD and RTC clock chip) on the same SDA/SCL lines.",
    concepts: ["Bus Topologies", "SPI Multi-slave Select", "I2C Hexadecimal Addresses", "Wire Library API"],
    tools: ["Arduino Uno", "DS3231 RTC Module", "I2C LCD Display", "Oscilloscope (Demo)"],
    skills: ["I2C Bus Troubleshooting", "RTC Programming"],
    notes: "Learned how I2C uses pull-up resistors to maintain signal integrity over the bus lines.",
    status: "Completed"
  },
  {
    day: 14,
    theme: "Introduction to ESP8266 & Wi-Fi",
    theory: "Transitioning from standalone microcontrollers to connected IoT modules. Overview of ESP8266 Wi-Fi chip, AT command set, and firmware configurations.",
    lab: "Interfacing ESP8266 module with Arduino using SoftwareSerial. Executing AT commands to scan for local Wi-Fi hotspots.",
    concepts: ["ESP8266 Chipset Architecture", "AT Commands", "Software Serial Libraries", "Wi-Fi Modes (AP, Station)"],
    tools: ["Arduino Uno", "ESP-01 ESP8266 Module", "Breadboard", "Logic Level Converter"],
    skills: ["AT Command Configuration", "SoftwareSerial setups"],
    notes: "ESP-01 operates strictly at 3.3V logic. Connecting directly to 5V will permanently damage the module.",
    status: "Completed"
  },
  {
    day: 15,
    theme: "ESP8266 Board Manager & Native IDE Setup",
    theory: "Programming the ESP8266 natively. Bypassing the Arduino Uno and flashing firmware directly onto the NodeMCU development board using the ESP8266 Board Manager in Arduino IDE.",
    lab: "Setting up NodeMCU v3 ESP8266 board, configuring the IDE, and uploading a basic Wi-Fi scanner and LED blink sketch natively.",
    concepts: ["NodeMCU pin layout", "USB-to-UART CP2102", "Native ESP8266 programming", "Blink code on ESP"],
    tools: ["NodeMCU ESP8266 Board", "Micro USB Cable", "PC"],
    skills: ["Board Manager Setup", "NodeMCU Flashing"],
    notes: "NodeMCU is much faster and has more program memory than Arduino Uno, making it ideal for internet communication.",
    status: "Completed"
  },
  {
    day: 16,
    theme: "Wi-Fi Connections & Web Server Hosting",
    theory: "How a local device acts as a server on a Local Area Network (LAN). Understanding HTTP protocols, GET requests, IP addresses, and hosting simple HTML layouts on ESP8266.",
    lab: "Writing a NodeMCU code to host a local Web Server on the home Wi-Fi network. Controlling an LED by clicking buttons on a phone browser.",
    concepts: ["Local IP Address", "ESP8266WebServer Library", "HTTP GET/POST protocols", "HTML String injection in C"],
    tools: ["NodeMCU ESP8266", "LED", "Router / Hotspot", "Smartphone browser"],
    skills: ["Local Web Server Development", "Wi-Fi Router configuration"],
    notes: "Connecting the phone to the exact same Wi-Fi network as the NodeMCU is required to load the server page.",
    status: "Completed"
  },
  {
    day: 17,
    theme: "Cloud IoT Platforms: ThingSpeak",
    theory: "Introduction to Application Programming Interfaces (APIs). API Keys (Write API / Read API). Channel configurations and visual analytics on cloud dashboards.",
    lab: "Programming NodeMCU to read DHT11 temperature data and push the values to ThingSpeak Cloud using HTTP GET requests.",
    concepts: ["API endpoints", "HTTP Client operations", "Data Stream Logging", "ThingSpeak dashboards"],
    tools: ["NodeMCU ESP8266", "DHT11 Sensor", "Thingspeak Account", "Wi-Fi"],
    skills: ["Cloud API Integration", "Data Uploading Loops"],
    notes: "ThingSpeak channels can plot real-time sensor graphs which are perfect for monitoring weather values remotely.",
    status: "Completed"
  },
  {
    day: 18,
    theme: "IoT Platforms: Blynk App Integration",
    theory: "Overview of Blynk Cloud and mobile app ecosystems. Working with Virtual Pins (V-pins) to exchange variables between hardware and custom mobile applications.",
    lab: "Creating a mobile layout with switch and gauge widgets on the Blynk app. Controlling a relay and viewing LDR light intensity remotely.",
    concepts: ["Virtual Pins vs Physical Pins", "Blynk Token Authorization", "Blynk library callback loops"],
    tools: ["NodeMCU ESP8266", "Relay Module", "LDR Sensor", "Blynk App", "Wi-Fi"],
    skills: ["App Dashboard Design", "Virtual Pin Routing"],
    notes: "Blynk provides immediate control over cellular data networks. No local IP range limitation.",
    status: "Completed"
  },
  {
    day: 19,
    theme: "MQTT Protocol Fundamentals",
    theory: "MQTT (Message Queuing Telemetry Transport) protocol. Publish-Subscribe model vs Request-Response model. Broker architectures, topics, payloads, and Quality of Service (QoS).",
    lab: "Subscribing to a topic on an online public broker (HiveMQ / Shiftr.io) and using an MQTT client app to toggle an LED remotely.",
    concepts: ["MQTT Broker", "Publish / Subscribe", "MQTT Topics (e.g. /home/livingroom/temp)", "Keep Alive Ping"],
    tools: ["NodeMCU ESP8266", "HiveMQ MQTT Broker", "MQTT Lens Tool"],
    skills: ["MQTT Coding", "PubSubClient Library"],
    notes: "MQTT is incredibly lightweight and fast. It uses much less bandwidth than HTTP, which is great for battery devices.",
    status: "Completed"
  },
  {
    day: 20,
    theme: "ESP32: Next Gen IoT Microcontroller",
    theory: "ESP32 vs ESP8266. Dual-core processor, built-in Bluetooth (Classic and BLE), integrated touch sensors, Hall Effect sensor, and higher speed/GPIO count.",
    lab: "Setting up ESP32 libraries. Coding the built-in Touch sensor pin to toggle an LED and reading the integrated Hall sensor value.",
    concepts: ["Dual Core processing", "BLE vs Bluetooth Classic", "Capacitive Touch Pins", "Hall Effect sensing"],
    tools: ["ESP32 DevKit Board", "Arduino IDE", "PC"],
    skills: ["ESP32 Workspace configuration", "Touch-pin programming"],
    notes: "Touch inputs are highly responsive and can replace physical click buttons in our projects.",
    status: "Completed"
  },
  {
    day: 21,
    theme: "Bluetooth Low Energy (BLE) on ESP32",
    theory: "BLE architecture: Client-Server structure, GATT profile, Services, Characteristics, and UUIDs. Power consumption differences between BLE and Classic Bluetooth.",
    lab: "Creating a BLE Server on ESP32 that broadcasts temperature data. Reading it via a BLE Scanner app on a smartphone.",
    concepts: ["GATT Profile", "Services & Characteristics", "UUID Generation", "BLE Advertising"],
    tools: ["ESP32 DevKit Board", "BLE Scanner Mobile App", "DHT11 Sensor"],
    skills: ["BLE Coding", "Smartphone Bluetooth pairing"],
    notes: "BLE allows sending sensor alerts directly to phones with tiny battery expenditure.",
    status: "Completed"
  },
  {
    day: 22,
    theme: "SPI-based Sensors: RFID RC522",
    theory: "Radio Frequency Identification (RFID) principles. 13.56 MHz frequency operation, tags (Mifare), card readers, UID extraction, and security cryptographic keys.",
    lab: "Interfacing an MFRC522 RFID reader via SPI lines. Reading tag UIDs and displaying 'ACCESS GRANTED' on an LCD screen for registered cards.",
    concepts: ["RFID Frequencies", "Tag UID Codes", "SPI Pins wiring", "Access Control validation"],
    tools: ["MFRC522 RFID Reader", "RFID Cards/Tags", "Arduino Uno", "I2C LCD Screen"],
    skills: ["SPI Wiring", "Access Security Code Implementation"],
    notes: "Every RFID card has a unique 4-byte or 7-byte UID which is burnt in during manufacturing.",
    status: "Completed"
  },
  {
    day: 23,
    theme: "Data Logging: SD Card Module",
    theory: "File Systems (FAT16/FAT32) on microcontrollers. Appending data rows, CSV formats, handling open/write/close file streams. Keeping records without active internet.",
    lab: "Connecting an SPI SD card reader. Writing LDR sensor readings with timestamps to a `datalog.csv` file on a micro SD card.",
    concepts: ["SD Library", "CSV File Formatting", "SPI Bus Sharing", "Data Logging reliability"],
    tools: ["SPI SD Card Shield", "MicroSD Card", "Arduino Uno", "LDR Sensor"],
    skills: ["Offline Storage Programming", "Excel CSV creation"],
    notes: "Very useful for agricultural deployments where Wi-Fi is unavailable. The file can be read in Excel later.",
    status: "Completed"
  },
  {
    day: 24,
    theme: "Real Time Clocks (RTC) & Scheduling",
    theory: "Timekeeping logic. How DS3231 RTC modules keep time even when main systems lose power using a CR2032 coin cell battery. Register time bytes.",
    lab: "Interfacing DS3231 RTC, setting date/time variables, and programming a scheduling task (e.g. turning on a fan at 14:30:00 every day).",
    concepts: ["RTC Time Registers", "Backup Battery Power", "Time Alarms", "RTClib API"],
    tools: ["DS3231 RTC Module", "Arduino Uno", "Relay Module", "CR2032 Battery"],
    skills: ["RTC Time Management", "Scheduled Task Triggering"],
    notes: "The DS3231 uses an internal temperature-compensated crystal oscillator to remain highly accurate over years.",
    status: "Completed"
  },
  {
    day: 25,
    theme: "Interrupts & Hardware Debouncing",
    theory: "Polling vs Interrupts. Interrupt Service Routines (ISRs). Volatile variables. Switch mechanical bounce spikes and how to resolve them via hardware and software.",
    lab: "Configuring a push button on External Interrupt Pin (INT0). Incrementing a counter instantly and resolving bounce using millis() delays.",
    concepts: ["External Interrupts", "Interrupt Service Routine (ISR)", "Switch Contact Bounce", "Software Debouncing timer"],
    tools: ["Arduino Uno", "Push Button", "Resistor", "LED"],
    skills: ["ISR Coding", "Hardware Interrupt troubleshooting"],
    notes: "ISR code must be as short and fast as possible. Never use delay() inside an ISR function.",
    status: "Completed"
  },
  {
    day: 26,
    theme: "Introduction to Raspberry Pi & Linux",
    theory: "Microcontrollers vs Single Board Computers (SBCs). Architecture of Raspberry Pi. Overview of Raspberry Pi OS (Debian based), terminal commands, and directories.",
    lab: "Flashing Raspberry Pi OS onto an SD card, booting up, configuring network access, and running basic shell commands.",
    concepts: ["Single Board Computers", "Debian Linux", "OS flashing", "Linux Shell commands (ls, cd, sudo)"],
    tools: ["Raspberry Pi 4", "MicroSD Card", "Monitor", "Keyboard & Mouse"],
    skills: ["OS Flashing", "Linux Command Line Basics"],
    notes: "Raspberry Pi is a full computer. Getting familiar with the terminal takes some practice but is very powerful.",
    status: "Completed"
  },
  {
    day: 27,
    theme: "Python Programming for IoT",
    theory: "Introduction to Python programming. Variables, lists, loops, conditions, functions, and import libraries. Writing Python scripts to access hardware pins.",
    lab: "Writing a Python script on the Raspberry Pi to control physical GPIO pins. Blinking an LED and reading a push button state.",
    concepts: ["Python Syntax", "RPi.GPIO Library", "Indentation Rules", "Infinite loops in Python"],
    tools: ["Raspberry Pi 4", "LED", "Push Button", "Breadboard"],
    skills: ["Python Scripting", "RPi GPIO control"],
    notes: "Python requires proper indentation. Controlling pins with Python is very readable and clean.",
    status: "Completed"
  },
  {
    day: 28,
    theme: "Node-RED: Visual Flow Programming",
    theory: "Overview of Node-RED. Flow-based programming for connecting hardware devices, APIs, and online services. Input, Output, and Function nodes.",
    lab: "Installing Node-RED on Raspberry Pi. Creating a simple flow that receives temperature data over serial and shows it on an interactive web dashboard.",
    concepts: ["Flow-based UI", "Node Drag & Drop", "JSON payloads", "Dashboard nodes"],
    tools: ["Raspberry Pi 4", "Arduino (sending temp values)", "Node-RED environment"],
    skills: ["Node-RED Setup", "Dashboard flow creation"],
    notes: "Node-RED makes creating web user interfaces extremely fast with zero HTML/JS coding.",
    status: "Completed"
  },
  {
    day: 29,
    theme: "Firebase Database for Realtime IoT",
    theory: "Relational vs NoSQL Databases. Working with Firebase Realtime Database. Storing data as JSON structures. Realtime client listeners.",
    lab: "Programming NodeMCU ESP8266 to push sensor readings to Firebase database and toggling a relay state directly by modifying database values online.",
    concepts: ["NoSQL Databases", "Firebase REST API", "JSON Data Nodes", "Realtime Web Synchronization"],
    tools: ["NodeMCU ESP8266", "Firebase Account", "Relay Module", "LED"],
    skills: ["Firebase Library coding", "Database structuring"],
    notes: "Firebase updates values in milliseconds, making it perfect for rapid chat or immediate home control panels.",
    status: "Completed"
  },
  {
    day: 30,
    theme: "Mid-Term Review & Mini Projects",
    theory: "Review of modules completed. Troubleshooting practices, power management, common wiring bugs, and code efficiency optimization.",
    lab: "Working in groups to build a standalone project idea. Debugging I2C addresses, ADC calibrations, and Wi-Fi dropouts.",
    concepts: ["System integration", "Debugging strategies", "Power consumption management"],
    tools: ["All kits", "Multimeters", "Oscilloscopes"],
    skills: ["Troubleshooting", "Collaborative Engineering"],
    notes: "Mid-term evaluation. Our group successfully solved an I2C collision when mapping multiple sensors.",
    status: "Completed"
  },
  {
    day: 31,
    theme: "Smart Agriculture: Soil Moisture Interfacing",
    theory: "Understanding volumetric water content in soil. Resistance vs Capacitive Soil Moisture sensors. Preventing sensor corrosion using duty cycle power supply.",
    lab: "Interfacing soil moisture probe, logging moisture thresholds, and controlling a 5V sub pump based on dryness.",
    concepts: ["Soil Volumetric Water Content", "Resistive Probes vs Capacitive Probes", "Corrosion prevention", "Solenoid water valves"],
    tools: ["Capacitive Soil Moisture Sensor", "5V Water Pump", "Relay Module", "Arduino Uno"],
    skills: ["Soil sensor calibration", "Pump drive circuits"],
    notes: "Capacitive sensors are better than resistive ones because they do not corrode when left in wet soil.",
    status: "Completed"
  },
  {
    day: 32,
    theme: "Water Flow Sensor & Liquid Level",
    theory: "Hall effect water flow sensor. Mathematical calculation of flow rate (liters per hour) using pulse frequency. Float switches for overflow prevention.",
    lab: "Building a fluid flow meter that calculates total water volume flowing through a pipe and prints the result on an LCD screen.",
    concepts: ["Hall Effect Flow Sensor", "Pulse frequency calculation", "Float switches", "Volumetric calculation"],
    tools: ["YF-S201 Flow Sensor", "Liquid Float Switch", "Arduino Uno", "16x2 LCD"],
    skills: ["Frequency calculation code", "Liquid level monitoring"],
    notes: "We calibrated the flow sensor formula by measuring water into a graduated beaker.",
    status: "Completed"
  },
  {
    day: 33,
    theme: "Gas Sensors: MQ Series",
    theory: "Sensing toxic gases using metal-oxide semiconductor gas sensors. Working of MQ-2 (LPG, Smoke), MQ-135 (Air Quality), heater coils, and sensor preheating cycles.",
    lab: "Setting up MQ-2 gas sensor with NodeMCU. Calibrating clean-air resistance (Ro) and writing an alarm code that triggers a buzzer upon smoke detection.",
    concepts: ["Metal-oxide Sensors", "Sensor Preheating", "Air Quality Index (AQI)", "Ro/Rs Ratio calculations"],
    tools: ["MQ-2 Gas Sensor Module", "Buzzer", "NodeMCU ESP8266", "Gas source (lighter)"],
    skills: ["Gas sensor calibration", "Safety Alarm Logic"],
    notes: "Gas sensors require about 24 hours of burn-in/preheating before first use to deliver accurate measurements.",
    status: "Completed"
  },
  {
    day: 34,
    theme: "Flame Sensors & Fire Security",
    theory: "Optical sensing of light wavelengths. Infrared flame detection (760nm - 1100nm). Combining multiple safety sensors for critical alarm networks.",
    lab: "Building a fire alarm system that triggers an alert on ThingSpeak and rings a loud alarm if a flame is detected within 1 meter.",
    concepts: ["Infrared light spectrum", "Photodiode sensitivity", "Emergency shutdowns", "Critical thresholds"],
    tools: ["Flame Sensor Module", "Buzzer", "NodeMCU ESP8266", "Lighter"],
    skills: ["Flame detection wiring", "Multi-stage alarms"],
    notes: "Integrating flame and gas sensors provides a highly robust fire monitoring unit for industrial workspaces.",
    status: "Completed"
  },
  {
    day: 35,
    theme: "Servo & Stepper Motors for Smart Gates",
    theory: "Difference between Servos, Steppers (28BYJ-48), and DC motors. Step angles, driver chips (ULN2003), position holding torque, and precise rotary controls.",
    lab: "Coding a stepper motor to turn exactly 90 degrees to lift a toll gate when an RFID tag is verified.",
    concepts: ["Stepper Phase sequence", "ULN2003 driver logic", "Position accuracy", "Step angles"],
    tools: ["28BYJ-48 Stepper Motor", "ULN2003 Driver Board", "Arduino Uno", "RFID Kit"],
    skills: ["Stepper Motor control", "Precision gate logic"],
    notes: "Stepper motors require coordinate switching sequence inputs. The Stepper.h library handles this logic.",
    status: "Completed"
  },
  {
    day: 36,
    theme: "Rain & Dust Environment Monitoring",
    theory: "Environmental variable telemetry. Rain drop sensor grid, optical dust sensors (GP2Y1010AU0F), and PM2.5 particulate measurement principles.",
    lab: "Interfacing rain sensor and GP2Y10 dust sensor. Reading analog dust density levels and logging the values to ThingSpeak Cloud.",
    concepts: ["Rain grid resistance", "PM2.5 particles", "Infrared diode alignment", "Air cleanliness metrics"],
    tools: ["Rain Sensor Board", "GP2Y10 Dust Sensor", "NodeMCU", "Jumper Wires"],
    skills: ["Dust sensor code mapping", "Environmental monitoring"],
    notes: "Measuring dust density requires pulsing the internal IR LED for exactly 0.32 milliseconds to read the output value.",
    status: "Completed"
  },
  {
    day: 37,
    theme: "Smart Home: IR Remote Decoding",
    theory: "Infrared communication protocols (NEC protocol). Carrier frequencies (38kHz), start frames, address bits, and command byte decoding.",
    lab: "Connecting an TSOP1738 IR receiver. Decoding remote controller key codes and programming standard buttons to control household relay channels.",
    concepts: ["NEC IR Protocol", "TSOP Demodulation", "Hex code extraction", "IRremote Library"],
    tools: ["TSOP1738 IR Receiver", "Infrared Remote Controller", "Relays", "Arduino Uno"],
    skills: ["IR Protocol decoding", "Remote control interfacing"],
    notes: "Any TV or AC remote can be decoded and mapped to trigger relays on the microcontroller.",
    status: "Completed"
  },
  {
    day: 38,
    theme: "Power Saving Modes & Sleep States",
    theory: "Battery constraints in field deployments. Current draw in active mode vs sleep mode. Arduino Deep Sleep and ESP8266 Deep Sleep modes. Wake up sources (timer, external GPIO).",
    lab: "Configuring NodeMCU ESP8266 for deep sleep. Linking GPIO16 (D0) to RST pin to wake the board up every 10 minutes to read sensors and sleep again.",
    concepts: ["Deep Sleep States", "Micro-Amps current draw", "External RST wakeups", "Battery life calculation"],
    tools: ["NodeMCU ESP8266", "Multimeter (current reading)", "Jumper Wire link"],
    skills: ["Sleep mode coding", "Low-power system design"],
    notes: "In deep sleep, current drops from 70mA to only about 20 microamps. This extends battery life from days to months.",
    status: "Completed"
  },
  {
    day: 39,
    theme: "Watchdog Timers (WDT)",
    theory: "Avoiding system freezes in remote deployments. How Watchdog timers automatically reset the microcontroller if the main program loop gets stuck or frozen.",
    lab: "Enabling internal Watchdog Timer (WDT) in Arduino. Creating a simulated software hang using an infinite loop, and watching the WDT auto-reset the system.",
    concepts: ["System Hang states", "WDT Pre-scalers", "Watchdog Reset (wdt_reset)", "Hardware fail-safes"],
    tools: ["Arduino Uno", "LED (visual reset indicator)"],
    skills: ["WDT Configuration", "Reliability engineering"],
    notes: "Watchdog timers are critical for remote setups like high weather balloons or deep agriculture sensors.",
    status: "Completed"
  },
  {
    day: 40,
    theme: "Cloud: Webhooks & IFTTT Alerts",
    theory: "Webhooks protocols. How to link IoT platforms to third-party services. Working with IFTTT (If This Then That) to send push notifications, emails, or SMS alerts.",
    lab: "Configuring a NodeMCU warning loop that triggers an IFTTT Webhook, which automatically sends an email alert to the instructor upon gas leakage detection.",
    concepts: ["Webhooks (HTTP POST)", "IFTTT Applets", "Trigger API endpoints", "Automated email routing"],
    tools: ["NodeMCU ESP8266", "Gas sensor", "IFTTT account", "Wi-Fi"],
    skills: ["Webhook implementation", "Automated email alerts"],
    notes: "IFTTT acts as a bridge that links simple HTTP calls to modern APIs like Telegram, Gmail, or Twilio.",
    status: "Completed"
  },
  {
    day: 41,
    theme: "Node-RED Advanced: Database Logs",
    theory: "Linking Node-RED to databases. Storing data rows in SQLite or MySQL databases. Setting up persistent storage for historical IoT analysis.",
    lab: "Creating a Node-RED flow on Raspberry Pi that captures MQTT temperature data and inserts the readings into an SQLite database file.",
    concepts: ["Database queries (SQL)", "Persistent logs", "Node-RED DB nodes", "Data tables visualizers"],
    tools: ["Raspberry Pi 4", "SQLite installation", "Node-RED"],
    skills: ["SQL commands on SBC", "Node-RED database integrations"],
    notes: "Stored database files allow graphing historical changes over weeks or months on the dashboard.",
    status: "Completed"
  },
  {
    day: 42,
    theme: "Adafruit IO Platform Integration",
    theory: "Overview of Adafruit IO cloud database. Feeds, dashboards, slider/toggle widgets, and MQTT integration hooks.",
    lab: "Connecting ESP32 to Adafruit IO. Toggling a dimmable light slider on the Adafruit IO dashboard to adjust PWM brightness on the ESP32.",
    concepts: ["Adafruit IO Feeds", "Feed throttling restrictions", "MQTT connection loops"],
    tools: ["ESP32 DevKit", "LED", "Adafruit IO Account", "Wi-Fi"],
    skills: ["Adafruit IO configuration", "Bi-directional cloud streams"],
    notes: "Adafruit IO has a clean interface and very easy-to-use libraries for Arduino IDE.",
    status: "Completed"
  },
  {
    day: 43,
    theme: "Introduction to Bluetooth Classic",
    theory: "Bluetooth Classic vs BLE. Profiles (Serial Port Profile - SPP). Communicating data to legacy android apps. Pairing codes.",
    lab: "Interfacing HC-05 Bluetooth module with Arduino. Pairing an Android phone to control relays using a serial terminal app.",
    concepts: ["Serial Port Profile (SPP)", "HC-05 AT configuration modes", "Legacy Bluetooth links"],
    tools: ["HC-05 Bluetooth Module", "Arduino Uno", "Relays", "Android Terminal App"],
    skills: ["HC-05 pairing & setup", "Bluetooth terminal coding"],
    notes: "We configured the HC-05 module's baud rate to 38400 using AT commands before programming it.",
    status: "Completed"
  },
  {
    day: 44,
    theme: "IoT Security: SSL/TLS Encryptions",
    theory: "Security risks in IoT devices. Eavesdropping and spoofing attacks. Understanding Secure Socket Layer (SSL) and Transport Layer Security (TLS). Sha-1 Fingerprints.",
    lab: "Programming NodeMCU ESP8266 to connect securely to a HTTPS web endpoint using SSL certificates and verification fingerprints.",
    concepts: ["SSL/TLS Encryption", "HTTPS calls vs HTTP", "SHA-1 Fingerprint keys", "WiFiClientSecure Library"],
    tools: ["NodeMCU ESP8266", "PC (extracting fingerprints)"],
    skills: ["Secure WiFi connections", "Certificate updates"],
    notes: "Using secure connections ensures that our credentials cannot be hijacked on public Wi-Fi routes.",
    status: "Completed"
  },
  {
    day: 45,
    theme: "Edge Computing & Local Decisions",
    theory: "Cloud dependency issues. Internet drops, latency delay, and data volume constraints. The value of executing logic locally at the Edge before sending to Cloud.",
    lab: "Creating a hybrid program that makes immediate local decisions (turning on emergency fan on gas spike) even if the Wi-Fi connection drops, while queueing cloud uploads.",
    concepts: ["Edge logic design", "Fail-safe architectures", "Buffer queue structures"],
    tools: ["NodeMCU ESP8266", "Gas Sensor", "Buzzer", "Relay"],
    skills: ["Edge logic programming", "Offline caching loops"],
    notes: "Smart homes should never lose basic operations (like light switches) if the internet router restarts.",
    status: "Completed"
  },
  {
    day: 46,
    theme: "OTA (Over-The-Air) Firmware Updates",
    theory: "Updating devices in hard-to-reach locations. Bootloaders, flashing code over Wi-Fi channels, partition tables, and OTA security keys.",
    lab: "Enabling OTA updates on NodeMCU. Flashing an updated blink program over local Wi-Fi without connecting any USB cables.",
    concepts: ["ArduinoOTA library", "mDNS service discovery", "Wireless flashing protocols", "OTA password locks"],
    tools: ["NodeMCU ESP8266", "Router", "PC with Arduino IDE"],
    skills: ["Wireless Flashing", "OTA setup configuration"],
    notes: "Once OTA is configured, you can update firmware on devices installed inside ceilings or walls easily.",
    status: "Completed"
  },
  {
    day: 47,
    theme: "GPS Module (Neo-6M) & Tracking",
    theory: "Global Positioning System (GPS) mechanics. Satellite trilateration, NMEA sentences ($GPRMC, $GPGGA), latitude/longitude coordinates, and altitude.",
    lab: "Interfacing Neo-6M GPS receiver with Arduino. Parsing coordinates using TinyGPS++ library and sending a Google Map link over serial monitor.",
    concepts: ["NMEA sentences", "GPS Satellites communication", "TinyGPS++ library API", "Coordinate conversions"],
    tools: ["Neo-6M GPS Module", "Arduino Uno", "Antenna", "Jumper Wires"],
    skills: ["GPS coordinate extraction", "NMEA parsing"],
    notes: "GPS modules need clear sky access to catch signals. Indoor tracking requires high sensitivity modules.",
    status: "Completed"
  },
  {
    day: 48,
    theme: "GSM Module (SIM900A) Interfacing",
    theory: "Cellular networks on IoT. Working with GSM/GPRS shields, SIM card setups, bands, and AT commands for sending SMS messages and placing voice dial notifications.",
    lab: "Interfacing SIM900A module with Arduino. Writing code to send an SMS text warning 'WATER LEVEL CRITICAL' to a mobile number on float switch trigger.",
    concepts: ["GSM cellular logic", "AT+CMGF formatting", "SMS PDU/Text modes", "Baud configurations"],
    tools: ["SIM900A GSM Module", "Working SIM Card", "External 2A Power Adapter", "Float Switch", "Arduino"],
    skills: ["Cellular system integration", "AT text sequences"],
    notes: "GSM modules draw high current spike pulses (up to 2A) during SMS sending. They require a separate power supply.",
    status: "Completed"
  },
  {
    day: 49,
    theme: "LoRa & LoRaWAN Basics",
    theory: "Long Range (LoRa) low power modulation. LoRa vs Wi-Fi/Bluetooth ranges. LoRaWAN gateways, end nodes, frequencies (868/915 MHz), and telemetry limits.",
    lab: "Building a point-to-point LoRa connection between two Arduino nodes equipped with RFM95 LoRa shields to send simple count ticks over 500 meters.",
    concepts: ["LoRa modulation", "Point-to-point wireless link", "RFM95 pins mapping", "SPI configuration"],
    tools: ["2x Arduino Uno", "2x RFM95 LoRa Modules", "Antennas"],
    skills: ["LoRa wiring setup", "LoRa packet exchange code"],
    notes: "LoRa signals can easily go through walls and travel miles in open fields with simple wire antennas.",
    status: "Completed"
  },
  {
    day: 50,
    theme: "Capstone Project Ideation & Brainstorming",
    theory: "Project planning strategies. Design thinking, block diagrams, component selection matrix, costing calculations, and milestone sheets.",
    lab: "Brainstorming and freezing individual Capstone ideas. Drawing circuit schematics on paper, listing sensors, and outlining flowchart diagrams.",
    concepts: ["Block Diagrams", "BOM (Bill of Materials)", "Project flowcharts"],
    tools: ["Design sheets", "Laptop CAD tools"],
    skills: ["System Architecture Design", "Planning & Cost estimation"],
    notes: "I decided to build a 'Smart Agriculture Irrigation & Soil Analytics System' featuring web dashboards and SMS alerts.",
    status: "Completed"
  },
  {
    day: 51,
    theme: "Capstone Project: Hardware Assembly",
    theory: "PCB designing vs breadboard prototypes. Power supply grids (5V / 3.3V / 12V rails). Common ground issues and shielding noise from sensors.",
    lab: "Soldering power distribution lines on a general-purpose PCB. Mounting sensors (soil, temperature, water level) onto the chassis.",
    concepts: ["Soldering safety", "Common power rails", "Prototyping boards", "Chassis mounting"],
    tools: ["Soldering Iron", "Perfboard", "Header pins", "Acrylic project base"],
    skills: ["Soldering & Assembly", "Hardware packaging"],
    notes: "Double-check connections with a multimeter continuity test before powering the board to prevent short circuits.",
    status: "Completed"
  },
  {
    day: 52,
    theme: "Capstone Project: Code Integration",
    theory: "Multi-sensor code integration. Handling non-blocking code logic using millis() instead of delay(). Structuring libraries and loop modules.",
    lab: "Merging DHT11, Soil Moisture, and Flow Sensor drivers into a single firmware code on ESP8266. Validating sensor readings concurrency.",
    concepts: ["Non-blocking loops (millis)", "Timer ticks", "Structured programming"],
    tools: ["NodeMCU ESP8266", "Laptop", "Integrated hardware kit"],
    skills: ["Code integration", "Non-blocking programming"],
    notes: "Using delay() freezes the CPU, which stops Wi-Fi tasks and breaks background connections. Millis() is highly recommended.",
    status: "Completed"
  },
  {
    day: 53,
    theme: "Capstone Project: Cloud Dashboards",
    theory: "Design interfaces for data visualization. Designing layout paths for gauges, historic charts, dynamic toggles, and notification settings.",
    lab: "Configuring a Blynk app screen and Adafruit IO dashboard to plot real-time soil moisture percentage and control pump switches from a web browser.",
    concepts: ["UI/UX for Dashboards", "Virtual stream syncs", "Bi-directional triggers"],
    tools: ["Blynk Dashboard", "Adafruit IO", "Wi-Fi setup"],
    skills: ["Web Control design", "Telemetry links sync"],
    notes: "Synchronized triggers allow the phone app and web page dashboards to display the exact same relay states instantly.",
    status: "Completed"
  },
  {
    day: 54,
    theme: "Capstone Project: Notification Alerts",
    theory: "Designing threshold warning conditions. High-priority alerts vs low-priority background logs. Integrating SMS and email trigger paths.",
    lab: "Adding logic code to send SMS alerts using SIM900A if soil moisture drops below 20% and soil temperature exceeds 40°C.",
    concepts: ["Alert levels thresholds", "Cellular failover logic", "Multi-channel notifications"],
    tools: ["NodeMCU", "SIM900A Module", "Active SIM Card"],
    skills: ["GSM Alert triggering", "Multi-path messaging code"],
    notes: "Adding SMS warnings ensures that even if local farm Wi-Fi drops, the farmer still receives warnings on their basic phone.",
    status: "Completed"
  },
  {
    day: 55,
    theme: "Capstone Project: Debugging & Optimization",
    theory: "Identifying memory leaks and heap memory issues in ESP8266. Solving connection timeouts, power spikes during relay triggers, and noise filter routines.",
    lab: "Adding flyback diodes on relays to avoid power spike resets. Adjusting sensor calibration scales. Enhancing loop speeds.",
    concepts: ["RAM optimization", "Flyback voltage clamp", "Sensor averaging filters"],
    tools: ["Multimeter", "Arduino IDE serial profiler"],
    skills: ["Power noise debugging", "Firmware profiling"],
    notes: "Averaging 5 sensor readings helps to filter out electrical noise fluctuations on the ADC converter.",
    status: "Completed"
  },
  {
    day: 56,
    theme: "Field Deployment & Testing",
    theory: "Real world issues: Waterproof enclosure designs, dust protection (IP ratings), solar battery sizing, and long term environmental testing protocols.",
    lab: "Packaging the capstone project inside an IP65 waterproof box. Testing the system in a real garden patch at IIIT Kottayam campus for 24 hours.",
    concepts: ["IP Enclosures (IP65/IP67)", "Solar power budgeting", "Environmental stress tests"],
    tools: ["Waterproof project box", "Solar Panel test rig", "IIIT Kottayam gardens"],
    skills: ["Field deployment", "IP packaging setups"],
    notes: "The solar charging setup kept the system running indefinitely. The waterproof enclosure kept components dry.",
    status: "Completed"
  },
  {
    day: 57,
    theme: "Documentation & BOM finalization",
    theory: "Writing professional technical manuals. Project schematics using Fritzing, system architecture flowcharts, and final Bill of Materials (BOM) cost tables.",
    lab: "Drafting the system flow diagrams and filling out component cost sheets. Writing instructions on how to use the dashboard.",
    concepts: ["Schematic designing", "BOM spreadsheets", "Technical writing formatting"],
    tools: ["Fritzing App", "Draw.io", "Microsoft Word"],
    skills: ["CAD schematic drawing", "Technical documentation"],
    notes: "Creating neat diagrams in Fritzing makes the project documentation look highly professional and clear.",
    status: "Completed"
  },
  {
    day: 58,
    theme: "Presentation & Slide Prep",
    theory: "Presenting technical ideas to non-technical stakeholders. Emphasizing problems, objectives, solutions, cost-efficiency, and market feasibility.",
    lab: "Creating presentation slides detailing problems, block diagrams, cloud dashboards, and demo videos of the capstone project.",
    concepts: ["Technical slide formatting", "Elevator pitch layouts", "Feasibility reviews"],
    tools: ["Google Slides / PowerPoint"],
    skills: ["Presentation skills", "System pitching"],
    notes: "Focusing on how the project reduces water waste by 40% makes a compelling argument for deployment.",
    status: "Completed"
  },
  {
    day: 59,
    theme: "Mock Project Evaluations",
    theory: "Handling viva-voce questions. Common inquiries regarding microcontrollers, security protocols, power loops, and choices of sensors.",
    lab: "Presenting the project model to fellow trainees. Answering mock viva questions posed by the mentor regarding scaling and security.",
    concepts: ["Viva strategies", "Peer review feedback", "Defending technical choices"],
    tools: ["Project Model", "Laptop"],
    skills: ["Q&A Handling", "Critical thinking defense"],
    notes: "The mock viva helped identify some edge cases, like how the system handles database syncs after recovering from internet drops.",
    status: "Completed"
  },
  {
    day: 60,
    theme: "Final Capstone Presentation & Graduation",
    theory: "Final program wrap-up. Career guidance, Skill India certification details, and job placements in IoT and Embedded fields.",
    lab: "Presenting the Smart Irrigation Capstone Project to the panel of external experts. Running a live real-time cloud data upload demonstration.",
    concepts: ["Expert Panel Evaluation", "System Live Demonstrations", "Skill India Mission Placements"],
    tools: ["Capstone Working Setup", "Presentation screen"],
    skills: ["Public Speaking", "Live demo troubleshooting"],
    notes: "Successfully graduated the IoT Assistant Training under the Skill India Mission! The panel highly appreciated our smart irrigation project.",
    status: "Completed"
  }
];

const labsData = [
  {
    num: 1,
    obj: "To design and program a 3-way Traffic Light Controller using digital GPIO outputs on Arduino.",
    comps: ["Arduino Uno", "3x LEDs (Red, Yellow, Green)", "3x 220Ω Resistors", "Breadboard", "Jumper Wires"],
    circuit: "Connect cathode pins of all LEDs to GND through 220 Ohm resistors. Connect anode of Red LED to Pin 13, Yellow LED to Pin 12, and Green LED to Pin 11 of Arduino.",
    code: `// Traffic Light Controller
const int redLed = 13;
const int yellowLed = 12;
const int greenLed = 11;

void setup() {
  pinMode(redLed, OUTPUT);
  pinMode(yellowLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
}

void loop() {
  // Red light ON for 5 seconds
  digitalWrite(redLed, HIGH);
  digitalWrite(yellowLed, LOW);
  digitalWrite(greenLed, LOW);
  delay(5000);

  // Red and Yellow light ON for 2 seconds (preparing to turn green)
  digitalWrite(yellowLed, HIGH);
  delay(2000);

  // Green light ON for 5 seconds
  digitalWrite(redLed, LOW);
  digitalWrite(yellowLed, LOW);
  digitalWrite(greenLed, HIGH);
  delay(5000);

  // Yellow light ON for 2 seconds
  digitalWrite(greenLed, LOW);
  digitalWrite(yellowLed, HIGH);
  delay(2000);
}`,
    obs: "The LEDs transition from Red to Green and back as programmed. The current-limiting resistors keep the current below 20mA per LED, protecting the digital pins.",
    result: "Successfully programmed and verified the traffic light timing sequence.",
    remarks: "Excellent layout. Code comments are neat and logical.",
    status: "Verified"
  },
  {
    num: 2,
    obj: "To interface a Light Dependent Resistor (LDR) to build an Automatic Street Light control circuit.",
    comps: ["Arduino Uno", "LDR Sensor", "10kΩ Resistor", "220Ω Resistor", "LED", "Breadboard", "Jumpers"],
    circuit: "Create a voltage divider with the LDR and a 10k resistor. Connect the midpoint of divider to Analog Pin A0. Connect anode of LED to Digital Pin 9 via a 220 Ohm resistor.",
    code: `// LDR Automatic Street Light
const int ldrPin = A0;
const int ledPin = 9;
const int threshold = 400; // Calibrated ambient light value

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int ldrValue = analogRead(ldrPin);
  Serial.print("LDR Value: ");
  Serial.println(ldrValue);

  if (ldrValue < threshold) {
    digitalWrite(ledPin, HIGH); // Turn ON light in dark
  } else {
    digitalWrite(ledPin, LOW);  // Turn OFF light in brightness
  }
  delay(500);
}`,
    obs: "As the ambient light drops below the threshold value (400), the digital output transitions to HIGH, turning the LED on. The LDR value changes inversely to light brightness.",
    result: "Auto street light prototype successfully built and verified.",
    remarks: "Good calibration of the sensor threshold.",
    status: "Verified"
  },
  {
    num: 3,
    obj: "To interface a DHT11 Sensor to read and display real-time Temperature & Humidity on a 16x2 I2C LCD screen.",
    comps: ["Arduino Uno", "DHT11 Sensor Module", "16x2 I2C LCD Screen", "Breadboard", "Jumper Wires"],
    circuit: "DHT11 Pin out: VCC to 5V, GND to GND, OUT to Pin 2. I2C LCD Pin out: VCC to 5V, GND to GND, SDA to A4, SCL to A5 on Arduino Uno.",
    code: `#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  dht.begin();
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("IoT Weather Mod");
  delay(2000);
  lcd.clear();
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    lcd.setCursor(0, 0);
    lcd.print("Sensor Error!");
    return;
  }

  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(t);
  lcd.print(" C");

  lcd.setCursor(0, 1);
  lcd.print("Humid: ");
  lcd.print(h);
  lcd.print(" %");

  delay(2000); // 2 seconds update rate
}`,
    obs: "The LCD shows the current temperature in Celsius and humidity percentage. When breathing onto the sensor, the humidity spikes, proving real-time tracking works.",
    result: "Local climate tracking device works and shows readings correctly on LCD screen.",
    remarks: "Good handling of library errors inside Code checks.",
    status: "Verified"
  },
  {
    num: 4,
    obj: "To design a Smart Proximity Alert System using an HC-SR04 Ultrasonic Distance Sensor and a Buzzer.",
    comps: ["Arduino Uno", "HC-SR04 Ultrasonic Sensor", "Piezo Buzzer", "Breadboard", "Jumper Wires"],
    circuit: "Ultrasonic Pin out: VCC to 5V, GND to GND, Trig to Pin 7, Echo to Pin 6. Piezo Buzzer: Positive to Pin 8, Negative to GND.",
    code: `// Proximity Alarm System
const int trigPin = 7;
const int echoPin = 6;
const int buzzerPin = 8;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.034 / 2; // Distance in cm

  Serial.print("Distance: ");
  Serial.println(distance);

  if (distance > 0 && distance < 15) {
    // Pulse buzzer faster as object gets closer
    digitalWrite(buzzerPin, HIGH);
    delay(100);
    digitalWrite(buzzerPin, LOW);
    delay(distance * 10);
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  delay(100);
}`,
    obs: "The buzzer sounds a series of rapid beeps when an obstacle moves within 15 cm of the sensor. The beep frequency increases proportionally to proximity.",
    result: "Successfully integrated the sonar distance logic and proximity warnings.",
    remarks: "Buzzer delay scaling works extremely smoothly.",
    status: "Verified"
  },
  {
    num: 5,
    obj: "To interface an SG90 Servo Motor and control its rotation angle using a 10kΩ Potentiometer.",
    comps: ["Arduino Uno", "SG90 Servo Motor", "10kΩ Potentiometer", "Breadboard", "Jumper Wires"],
    circuit: "Potentiometer: Outer pins to 5V and GND, Middle pin to Pin A0. Servo: Red to 5V, Brown to GND, Orange (PWM) to Pin 9 on Arduino.",
    code: `#include <Servo.h>

Servo myServo;
const int potPin = A0;

void setup() {
  myServo.attach(9);
}

void loop() {
  int potVal = analogRead(potPin); // Reads 0-1023
  int angle = map(potVal, 0, 1023, 0, 180); // Maps to 0-180 deg
  myServo.write(angle);
  delay(15); // Wait for servo to reach position
}`,
    obs: "The servo horn moves in sync with the potentiometer rotation. The map function correctly scales the 10-bit analog values into 180 degrees.",
    result: "Variable rotary control of servo motor successfully established.",
    remarks: "Neat wiring and clean implementation.",
    status: "Verified"
  },
  {
    num: 6,
    obj: "To configure NodeMCU ESP8266 to push local DHT11 Sensor readings to the ThingSpeak Cloud dashboard.",
    comps: ["NodeMCU ESP8266", "DHT11 Sensor", "Wi-Fi Access Point", "Jumper Wires"],
    circuit: "DHT11 Pin out: VCC to NodeMCU 3.3V, GND to GND, DATA to Pin D2 (GPIO 4). Board powered via USB port.",
    code: `#include <ESP8266WiFi.h>
#include <DHT.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* server = "api.thingspeak.com";
String apiKey = "YOUR_THINGSPEAK_WRITE_API_KEY";

#define DHTPIN 4 // GPIO4 is D2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

WiFiClient client;

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nConnected!");
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("DHT Read Error!");
    return;
  }

  if (client.connect(server, 80)) {
    String postStr = apiKey;
    postStr +="&field1=";
    postStr += String(t);
    postStr +="&field2=";
    postStr += String(h);
    postStr += "\\r\\n\\r\\n";

    client.print("POST /update HTTP/1.1\\n");
    client.print("Host: api.thingspeak.com\\n");
    client.print("Connection: close\\n");
    client.print("X-THINGSPEAKAPIKEY: "+apiKey+"\\n");
    client.print("Content-Type: application/x-www-form-urlencoded\\n");
    client.print("Content-Length: "+String(postStr.length())+"\\n\\n");
    client.print(postStr);
    
    Serial.println("Uploaded to ThingSpeak: Temp: " + String(t) + " Hum: " + String(h));
  }
  client.stop();
  delay(15000); // Upload every 15 seconds
}`,
    obs: "The NodeMCU connects to Wi-Fi, acquires an IP, and pushes JSON packages over HTTP. ThingSpeak dashboards draw graphs automatically from the channel feeds.",
    result: "Cloud logging works properly. Visual data charts validated online.",
    remarks: "Great progress. Excellent network configuration.",
    status: "Verified"
  },
  {
    num: 7,
    obj: "To construct a Smart Home Appliance controller via a 5V electromagnetic Relay module and a NodeMCU.",
    comps: ["NodeMCU ESP8266", "5V Relay Module", "12V DC LED Lamp", "Jumper Wires", "External Power supply"],
    circuit: "Relay Pin out: VCC to 5V (or Vin of NodeMCU), GND to GND, IN to D1 (GPIO 5). Load Pin out: Connect 12V battery and lamp in series through the Common (COM) and Normally Open (NO) terminals of the relay.",
    code: `#include <ESP8266WiFi.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
WiFiServer server(80);

const int relayPin = 5; // D1

void setup() {
  Serial.begin(115200);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // Relay active low OFF state

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  server.begin();
  Serial.println("Server IP: " + WiFi.localIP().toString());
}

void loop() {
  WiFiClient client = server.available();
  if (!client) return;

  String req = client.readStringUntil('\\r');
  client.flush();

  if (req.indexOf("/relay/on") != -1) {
    digitalWrite(relayPin, LOW); // Relay active low ON
  } else if (req.indexOf("/relay/off") != -1) {
    digitalWrite(relayPin, HIGH); // Relay active low OFF
  }

  String response = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n";
  response += "<html><body><h1>Relay Control</h1>";
  response += "<a href=\\"/relay/on\\"><button style='font-size:24px'>Turn ON</button></a><br><br>";
  response += "<a href=\\"/relay/off\\"><button style='font-size:24px'>Turn OFF</button></a></body></html>";
  client.print(response);
}`,
    obs: "When accessing the IP address in a web browser, custom control buttons are shown. Clicking 'Turn ON' energizes the relay coil with a click sound, completing the 12V light circuit.",
    result: "Hosted a local web page web server that successfully controls real AC/DC electrical appliances.",
    remarks: "Good implementation of HTTP response packets.",
    status: "Verified"
  },
  {
    num: 8,
    obj: "To build an MQ-2 Gas sensor safety monitor with local buzzer alerts and IoT SMS notifications via SIM900A.",
    comps: ["Arduino Uno", "MQ-2 Gas Sensor Module", "Piezo Buzzer", "SIM900A GSM Module", "External 12V power supply for GSM"],
    circuit: "MQ-2: VCC to 5V, GND to GND, A0 to Pin A0. Buzzer: Positive to Pin 8. GSM: RX to Pin 10 (Tx), TX to Pin 11 (Rx) via SoftwareSerial. Connect GNDs.",
    code: `#include <SoftwareSerial.h>

SoftwareSerial gsm(11, 10); // RX, TX
const int mqPin = A0;
const int buzzerPin = 8;
const int limitVal = 350; // Smoke threshold level
bool smsSent = false;

void setup() {
  pinMode(buzzerPin, OUTPUT);
  gsm.begin(9600);
  Serial.begin(9600);
  delay(1000);
}

void loop() {
  int val = analogRead(mqPin);
  Serial.println(val);

  if (val > limitVal) {
    digitalWrite(buzzerPin, HIGH);
    if (!smsSent) {
      sendAlertSMS(val);
      smsSent = true;
    }
  } else {
    digitalWrite(buzzerPin, LOW);
    smsSent = false; // Reset warning state
  }
  delay(1000);
}

void sendAlertSMS(int level) {
  gsm.println("AT+CMGF=1"); // Set text mode
  delay(500);
  gsm.println("AT+CMGS=\\"+919876543210\\""); // Replace recipient number
  delay(500);
  gsm.print("ALERT! Gas Leakage Detected. Concentration level: ");
  gsm.print(level);
  gsm.write(26); // Ctrl+Z character to send
  delay(5000);
}`,
    obs: "Exposing the sensor to butane gas triggers the buzzer immediately. Within 10 seconds, the SIM900A connects to the cellular tower and delivers a warning SMS to the configured number.",
    result: "Emergency GSM notification and local buzzer security model verified.",
    remarks: "Robust fail-safe program structure. Clean work.",
    status: "Verified"
  }
];

const projectsData = [
  {
    name: "Smart Agriculture Irrigation & Soil Analytics",
    problem: "Traditional farming relies on manual guesswork for watering crops, leading to either underwatering (killing crops) or overwatering (wasting soil nutrients and water resources). Water pump scheduling is not adjusted based on weather conditions.",
    obj: "To construct a cellular-backed, cloud-connected autonomous watering device that reads soil moisture, tracks environment indexes, saves water outputs, and alerts farmers of dry conditions.",
    comps: ["NodeMCU ESP8266", "Capacitive Soil Moisture Probe", "DHT11 Weather Sensor", "5V DC Water Pump", "5V Relay Module", "16x2 LCD Panel", "Li-ion Battery Pack", "Solar Panel Charger Board"],
    circuit: "Soil Moisture Module output goes to Pin A0. DHT11 data line to D2. Relay input to D1. The LCD SDA/SCL lines connect to D3/D4. Pump powered through battery terminals switched by the Relay Normally Open switch.",
    principle: "The NodeMCU measures soil moisture level every 10 seconds. If it drops below 30% and temperature is above 15°C, NodeMCU sends a trigger signal to switch on the 5V relay, which powers the water pump. When the moisture level reaches 70%, the pump is switched off. Real-time graphs are sent to Adafruit IO via MQTT, allowing the farmer to monitor soil health from anywhere.",
    images: "smart_irrigation_diagram.png",
    code: `// Capstone: Smart Agriculture Irrigation
#include <ESP8266WiFi.h>
#include <Adafruit_MQTT.h>
#include <Adafruit_MQTT_Client.h>
#include <DHT.h>

#define DHTPIN 2 
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const int moisturePin = A0;
const int pumpRelay = 5; // D1

// Wi-Fi Config
#define WLAN_SSID "FarmWifi"
#define WLAN_PASS "FarmPassword"

// Adafruit IO Config
#define AIO_SERVER "io.adafruit.com"
#define AIO_SERVERPORT 1883
#define AIO_USERNAME "supriya_iot"
#define AIO_KEY "aio_ABC123XYZ456"

WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_USERNAME, AIO_KEY);
Adafruit_MQTT_Publish moisture_feed = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/moisture");
Adafruit_MQTT_Publish temp_feed = Adafruit_MQTT_Publish(&mqtt, AIO_USERNAME "/feeds/temp");
Adafruit_MQTT_Subscribe pump_feed = Adafruit_MQTT_Subscribe(&mqtt, AIO_USERNAME "/feeds/pump");

void setup() {
  pinMode(pumpRelay, OUTPUT);
  digitalWrite(pumpRelay, HIGH); // Off
  dht.begin();
  
  WiFi.begin(WLAN_SSID, WLAN_PASS);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
  
  mqtt.subscribe(&pump_feed);
}

void loop() {
  MQTT_connect();
  
  int raw_moisture = analogRead(moisturePin);
  int moisture_pct = map(raw_moisture, 800, 300, 0, 100); // Calibrated range
  moisture_pct = constrain(moisture_pct, 0, 100);
  
  float temp = dht.readTemperature();
  
  // Logic Control
  if (moisture_pct < 30) {
    digitalWrite(pumpRelay, LOW); // Turn on pump
  } else if (moisture_pct > 70) {
    digitalWrite(pumpRelay, HIGH); // Turn off pump
  }

  // Publish telemetry
  moisture_feed.publish(moisture_pct);
  temp_feed.publish(temp);

  // Check external manual controls from Dashboard
  Adafruit_MQTT_Subscribe *subscription;
  while ((subscription = mqtt.readSubscription(1000))) {
    if (subscription == &pump_feed) {
      char *value = (char *)pump_feed.lastread;
      if (strcmp(value, "ON") == 0) digitalWrite(pumpRelay, LOW);
      if (strcmp(value, "OFF") == 0) digitalWrite(pumpRelay, HIGH);
    }
  }
  delay(10000);
}

void MQTT_connect() {
  if (mqtt.connected()) return;
  while (mqtt.connect() != 0) { mqtt.disconnect(); delay(5000); }
}`,
    outcome: "Achieved 40% reduction in water usage compared to scheduled watering timers. The soil moisture remains within optimal ranges (40-65%) for plant growth, and logs can be reviewed in real-time.",
    improvements: "1. Upgrade to a capacitive sensor layout to reduce degradation from galvanic corrosion in wet soil. 2. Implement solar harvesting tracking parameters. 3. Hook up regional weather forecasting API reports to postpone irrigation cycles if rainfall is expected within 12 hours."
  },
  {
    name: "Cloud-Based Smart Home Security & Automation System",
    problem: "Traditional homes consume high standby power due to lights and fans left running when rooms are empty. In addition, homeowners lack remote security alarms against unauthorized break-ins.",
    obj: "To construct a unified home automation dashboard that controls lights, monitors environment indices, and utilizes PIR tracking to alert users of intrusion.",
    comps: ["NodeMCU ESP32 DevKit", "4-Channel 5V Relay Shield", "PIR Motion Sensor", "LDR Sensor", "Buzzer Alarm", "Blynk IoT Cloud App", "AC-DC Step down power converter"],
    circuit: "PIR out to GPIO 12. Relays to GPIO 13, 14, 25, 26. Buzzer to GPIO 27. LDR divider goes to GPIO 34. System runs on a compact 5V power supply wired directly to the DevKit pins.",
    principle: "The ESP32 connects to local Wi-Fi and connects with the Blynk broker. Lights are activated automatically when someone enters the room and ambient light levels drop below 150 lux. If 'Security Mode' is activated on the Blynk app dashboard, any motion detected by the PIR sensor triggers the local buzzer and fires a high-priority push warning alert directly to the user's phone.",
    images: "smart_home_diagram.png",
    code: `// Capstone: ESP32 Smart Home
#define BLYNK_TEMPLATE_ID "TMPL987654"
#define BLYNK_DEVICE_NAME "SmartHome"
#include <WiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleEsp32.h>

char auth[] = "Blynk_Auth_Token_XYZ";
char ssid[] = "HomeWifi";
char pass[] = "HomePassword";

const int PIR_PIN = 12;
const int BUZZ_PIN = 27;
const int RELAY_LIGHT = 13;

bool securityMode = false;

BLYNK_WRITE(V0) { // Security Switch on Blynk App
  securityMode = param.asInt();
}

BLYNK_WRITE(V1) { // Manual Light Switch
  digitalWrite(RELAY_LIGHT, param.asInt() ? LOW : HIGH);
}

void setup() {
  pinMode(PIR_PIN, INPUT);
  pinMode(BUZZ_PIN, OUTPUT);
  pinMode(RELAY_LIGHT, OUTPUT);
  digitalWrite(RELAY_LIGHT, HIGH); // Off
  
  Blynk.begin(auth, ssid, pass);
}

void loop() {
  Blynk.run();
  
  if (digitalRead(PIR_PIN) == HIGH) {
    if (securityMode) {
      digitalWrite(BUZZ_PIN, HIGH);
      Blynk.logEvent("security_alert", "Intrusion Detected in Hallway!");
    }
  } else {
    digitalWrite(BUZZ_PIN, LOW);
  }
}`,
    outcome: "Developed a functional automation panel that cuts power consumption by up to 25% by switching off lights in unoccupied spaces. The intrusion response delay was measured to be less than 2 seconds.",
    improvements: "1. Integrate an ESP32-CAM module to capture security images of intruders and post them to Telegram channel. 2. Implement local database cache in case Wi-Fi drops."
  },
  {
    name: "IoT-Enabled Industrial Environment Monitoring & Safety System",
    problem: "Manufacturing plants and warehouses are prone to sudden toxic gas leakages, fire hazards, and high humidity levels that damage storage items. Manual monitoring is slow and dangerous.",
    obj: "To develop an industrial multi-sensor unit that triggers alarms, logs values to a cloud system, and initiates fan exhaust and machine safety shutdowns automatically.",
    comps: ["NodeMCU ESP8266", "MQ-135 Air Quality Sensor", "Flame Sensor Module", "DHT22 Precision Climate Sensor", "5V Relay for exhaust fan", "Buzzer Alarm", "I2C 16x2 LCD Screen", "Metal enclosure box"],
    circuit: "MQ-135 output to A0. DHT22 output to D5. Flame sensor output to D6. Relay output to D7. LCD SCL/SDA to D3/D4. System housed inside a grounded industrial metal enclosure.",
    principle: "The NodeMCU acts as the controller. The system scans the air quality index (AQI), heat/humidity, and flame parameters. If the MQ-135 reading exceeds 500ppm (high toxicity) or the flame sensor detects infrared fire patterns, the system: 1. Trips the machine power line via relay. 2. Activates the ventilation exhaust fan. 3. Rings the hazard buzzer. 4. Sends telemetry payload to ThingSpeak cloud for real-time monitoring.",
    images: "industrial_iot_diagram.png",
    code: `// Capstone: Industrial Safety Node
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>

#define DHTPIN 14 // D5
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

const int MQ_PIN = A0;
const int FLAME_PIN = 12; // D6
const int EXHAUST_RELAY = 13; // D7
const int ALARM_BUZZER = 15; // D8

const char* ssid = "FactoryNetwork";
const char* password = "SafetyPassword";
const String writeKey = "THINGSPEAK_WRITE_KEY";

void setup() {
  pinMode(FLAME_PIN, INPUT);
  pinMode(EXHAUST_RELAY, OUTPUT);
  pinMode(ALARM_BUZZER, OUTPUT);
  
  digitalWrite(EXHAUST_RELAY, LOW); // Off
  digitalWrite(ALARM_BUZZER, LOW);
  
  dht.begin();
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
}

void loop() {
  int gasVal = analogRead(MQ_PIN);
  float temp = dht.readTemperature();
  bool fire = (digitalRead(FLAME_PIN) == LOW); // Active Low
  
  bool hazard = (gasVal > 450) || (temp > 45.0) || fire;
  
  if (hazard) {
    digitalWrite(EXHAUST_RELAY, HIGH); // Turn on exhaust
    digitalWrite(ALARM_BUZZER, HIGH);  // Sounds alarm
  } else {
    digitalWrite(EXHAUST_RELAY, LOW);
    digitalWrite(ALARM_BUZZER, LOW);
  }
  
  // Publish parameters
  if (WiFi.status() == WL_CONNECTED) {
    WiFiClient client;
    HTTPClient http;
    String url = "http://api.thingspeak.com/update?api_key=" + writeKey + 
                 "&field1=" + String(temp) + 
                 "&field2=" + String(gasVal) + 
                 "&field3=" + String(fire ? 1 : 0);
    http.begin(client, url);
    http.GET();
    http.end();
  }
  delay(15000); // Logging index
}`,
    outcome: "Built an auto-ventilating industrial node. Successful validation of automated system shutdown on simulated propane leakages. Cloud graphs updated reliably on corporate screens.",
    improvements: "1. Add a backup battery system (UPS) to keep security sensors active during primary power failures. 2. Implement Modbus protocols to connect directly with industrial PLCs."
  }
];

const modulesData = [
  {
    num: 1,
    title: "Introduction to IoT",
    progress: 100,
    status: "Completed",
    badge: "Gold",
    topics: ["Introduction to IoT concepts & architectures", "Embedded Systems fundamental blocks", "Digital vs Analog signals", "Microcontrollers (Arduino, ESP8266) overview", "Communication protocols basics", "IoT Industrial applications"],
    skills: ["IoT Architecture modeling", "Board interface mapping", "Signal categorization"]
  },
  {
    num: 2,
    title: "Hardware and Electronics",
    progress: 100,
    status: "Completed",
    badge: "Gold",
    topics: ["Resistors, capacitors, transistors, LEDs", "Breadboard structural rows configuration", "Ohm's Law application calculations", "Digital Multimeter reading & calibration", "Schematic design and circuit building", "Arduino UNO pin architecture"],
    skills: ["Circuit Prototyping", "Voltage divider setups", "Multimeter analysis"]
  },
  {
    num: 3,
    title: "Programming and Embedded Systems",
    progress: 100,
    status: "Completed",
    badge: "Gold",
    topics: ["C/C++ Arduino programming basics", "GPIO Digital write & delay timings", "Analog reading & ADC conversion math", "Serial communication, data logging, baud rates", "PWM logic for speed/brightness sweeps", "Sensor interfacing libraries configurations"],
    skills: ["Embedded C programming", "Serial Interface Debugging", "Hardware interface calibration"]
  },
  {
    num: 4,
    title: "IoT Applications and Projects",
    progress: 100,
    status: "Completed",
    badge: "Gold",
    topics: ["ESP8266 / NodeMCU Wi-Fi integrations", "Hosting local web page web servers", "Publishing telemetry data streams to Cloud", "MQTT Publish/Subscribe broker networks", "GSM SMS alert systems", "Industrial waterproof chassis deployments"],
    skills: ["Cloud API setups", "LoRa & GSM Cellular programming", "Full stack system assembly"]
  }
];

// Export datasets to global variables for use in HTML/JS scripts
window.journalDatabase = journalData;
window.labsDatabase = labsData;
window.projectsDatabase = projectsData;
window.modulesDatabase = modulesData;
