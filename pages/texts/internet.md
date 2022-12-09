### What is internet

Network of networks
Mobile => Wifi Router => ISP
The Internet is a global network of computers connected to each other which communicate through a standardized set of protocols.

Server
Client - Each client (every single device with internet access) has an uniques IP (internet protocol) address

### How are data transported?

**Packets, Routing, and Reliability**

ships binary informations, in bits./ ==> Via Packets => in case that the package is too large, it will be broken into multiple packages. Packages travel through and are directed via **Routers**. Routers choose least busy (or "cheapest" - in terms of time and politicks) route to get the packages to the destination and due to that might arrive in different times.
Network of alternative routes also creates a reliability, if one of the routes is down, there are alternative routes.
TCP => Transmission Control Protocol. When all packets arrives, TCP checks if they are not broken and all are present. If so TCP approves the delivery and the action can be performed. If not, it resends a request.

Bits are sent by electricity, light and radio vawes.

BANDWITH: maximum transmision capacity of a device => Measured by a bit rate. Number of bits sent by per seconds.
LATENCY: time it takes for a bit to travel from one place to another

ELECTRICITY -> Ethernet Cable -> Measurable signal loss over few couple of meters.
LIGHT -> Sent by fiber optic cable -> signal travel by the speed og light and does not degrade over the distance. Used to transfer information over the continents and through the ocean.
RADIO SIGNALS -> Wireless. Restricted to the limited reach

URL -> Uniform Resource Locator
when typed in, browser communicats with servers in http(hyperText transfer protol) in get requests

ENCRYPTION & PUBLIC KEYS
Currently codes are encrypted within 256 bits code => the amount of combinations makes it impossible for any computer the compute in time
Asymetric Encryption sustains of public and private key combination.

SECURITY PROTOCOLS: SSL(ecure Socket Layer) & TLS(Transport layer Security)
