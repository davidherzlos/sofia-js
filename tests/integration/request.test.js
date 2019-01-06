
describe('API requests', function () {

  test('It should give a response', async () => {
    const api = 'https://localhost:1337/';
    const request = await fetch(api)
      .then( data => {
        expect(data.body).toMatch('generic view');
      });
    });
});
