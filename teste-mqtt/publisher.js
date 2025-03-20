const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://54.88.77.233');

client.on('connect', () =>{
    console.log('Conectado ao broker MQTT na EC2');

    client.publish('test/topic', 'bem em, to dentro', () => {
        console.log('Mensagem enviada!');
        client.end();
    });
});