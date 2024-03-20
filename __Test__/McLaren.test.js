const McLaren = require('./src/McLaren');

test('Encender McLaren', () => {
    const miMcLaren = new McLaren("720S", "Rojo", "V8 Twin-Turbo", "Automática de 7 velocidades", "Monocasco de fibra de carbono");
    miMcLaren.encender();
    expect(miMcLaren.encendido).toBeTruthy();
    expect(miMcLaren.estado).toBe('Encendido');
});

test('Apagar McLaren', () => {
    const miMcLaren = new McLaren("720S", "Rojo", "V8 Twin-Turbo", "Automática de 7 velocidades", "Monocasco de fibra de carbono");
    miMcLaren.encender();
    miMcLaren.apagar();
    expect(miMcLaren.encendido).toBeFalsy();
    expect(miMcLaren.estado).toBe('Apagado');
});

test('Acelerar McLaren cuando está encendido', () => {
    const miMcLaren = new McLaren("720S", "Rojo", "V8 Twin-Turbo", "Automática de 7 velocidades", "Monocasco de fibra de carbono");
    miMcLaren.encender();
    miMcLaren.acelerar();
    expect(miMcLaren.estado).toBe('Acelerando');
});

test('No se puede acelerar un McLaren apagado', () => {
    const miMcLaren = new McLaren("720S", "Rojo", "V8 Twin-Turbo", "Automática de 7 velocidades", "Monocasco de fibra de carbono");
    miMcLaren.acelerar();
    expect(miMcLaren.estado).toBe('Detenido');
});

test('Detener McLaren', () => {
    const miMcLaren = new McLaren("720S", "Rojo", "V8 Twin-Turbo", "Automática de 7 velocidades", "Monocasco de fibra de carbono");
    miMcLaren.encender();
    miMcLaren.acelerar();
    miMcLaren.detener();
    expect(miMcLaren.estado).toBe('Detenido');
});