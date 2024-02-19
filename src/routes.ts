export default (app): void => {
    app.get('/api/v1/status', (req, res) => {
      res.send({
        status: 'sever running',
      })
    })
  }
  