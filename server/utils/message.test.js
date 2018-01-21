const {generateMessage} = require('./message');

test('generates new message object correctly', () => {
    const message = generateMessage('John Doe', 'Hello');
    expect(message).toEqual({
        from: expect.any(String),
        text: expect.any(String),
        createdAt: expect.any(Number)
    });
});