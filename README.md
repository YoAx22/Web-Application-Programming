# Web-Application-Programming

## Project #1: [Java Socket Client](https://github.com/YoAx22/Web-Application-Programming/blob/main/SocketClient.java)
This Java socket client program demonstrates how to connect to a server, send data, and receive responses using sockets. It also showcases the use of Java's logging framework to log information.

### Methods
- void connect( )
  - Connects to the server using the provided hostname and port. Sets up the socket connection and initializes input and output streams.

- void sendValues(ArrayList<String> values)
  -  Sends a list of values to the server. Appends the sent data to the formula string.

-  void sendString(String data)
    -  Sends a string to the server.

- String readResponse( )
  - Reads the server's response from the input stream.

- void process(ArrayList<String> values)
  - Processes the communication with the server. Sends data, receives responses, and logs information.

The main method reads command-line arguments (ID, hostname, port), initializes the client, and invokes the processing method.

### Usage
Compile the program using a Java compiler.
-     javac socketClient.java
Run the compiled program with the necessary command-line arguments: ID, hostname (IP address), and port.
-     java socketClient <ID> <hostname> <port>


## Project #2: [AboutMe Webpage](https://github.com/YoAx22/Web-Application-Programming/tree/main/AboutMeWebPage)
This HTML page showcases various elements like headings, paragraphs, unordered lists, images, and maps. 
It is designed to display information about favorite things, images, and travel experiences and consists of three main sections, each contained within a separate div element.

### Usage
-  Load the HTML file using an HTML reader in the same folder as the CSS file


## Project #3: [Interactive Square Boxes](https://github.com/YoAx22/Web-Application-Programming/tree/main/Interactive%20Boxes)
This HTML page demonstrates the use of Bootstrap for styling, CSS for customizations, and jQuery for interactive features. The page contains a grid of square boxes that users can customize and manipulate using the provided buttons.

### Usage
- Open the HTML page in a web browser.
- Interact with the buttons to toggle colors, rounded borders, and add new boxes.

## Project #4: [System Information Dashboard](https://github.com/YoAx22/Web-Application-Programming/tree/main/SysInfoDash)
This web application displays system information retrieved via AJAX requests from a server. It presents real-time data about disk usage, root processes, load averages, and network statistics.

The JavaScript code (info.js) is responsible for making AJAX requests to the server and updating the dashboard with the received data. It contains functions to retrieve disk usage, root processes, load averages, and network statistics. The data is displayed on the dashboard using jQuery.

### Usage
- Open the index.html file in a web browser.
- The dashboard will display real-time information about disk usage, root processes, load averages, and network statistics.
- The data will be updated automatically at a set interval.
