import app from './app.js';
import './database/conn.js';

app.listen(app.get('port'), ()=>{
  console.log(`servidor: http://localhost:${app.get('port')}`)
});