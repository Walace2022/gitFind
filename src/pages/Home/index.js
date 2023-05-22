import './styles.css';
import { Header } from '../../components/Header';
import background from '../../assets/img/background.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background}  className='background-img' alt='background app'/>
        <div className='info'>
          <div className='busca'>
          <input name='usuario' placeholder='@username' />
          <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img className='profile-pic' src='https://hermes.dio.me/users/student/cbf6c896-6a42-4d16-a440-0ccd79db3745.jpg' alt='Foto de Perfil'/>
            <div>
              <h3>Nome da Pessoa</h3>
              <span>@username</span>
              <p>
                Descricao do github.
              </p>
            </div>
          </div>
            <hr />
        </div>

      </div>
    </div>
  );
}

export default App;
