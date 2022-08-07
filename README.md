# Practicle Byzantine Fault Tolerance consensus protocol

This is a cool implementation of Practicle Byzantine Fault Tolerance consensus protocol by Kashish Khullar, which I used to learn about distributed system and PBFT consensus protocol.

## How to run?

### First node:

```SECRET="NODE0" P2P_PORT=5000 HTTP_PORT=3000 node app```

### Second node:

```SECRET="NODE1" P2P_PORT=5001 HTTP_PORT=3001 PEERS=ws://localhost:5000 node app```

### Third node:

```SECRET="NODE2" P2P_PORT=5002 HTTP_PORT=3002 PEERS=ws://localhost:5001,ws://localhost:5000 node app```

You can make as many as you want. Do update the total number of nodes config file before creating more nodes.
