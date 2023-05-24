import { useState } from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import background from '../../assets/img/background.png';
import ItemList  from '../../components/ItemList';

function App() {
const [user, setUser] = useState('');
const [currentUser,setCurrentUser] = useState(null);
const [repos,setRepos] = useState(null);

const handleGetData = async ()=>{
  const userData = await fetch(`https://api.github.com/users/${user}`);
  const newUser = await userData.json();

  if(newUser.name){
    const {avatar_url, login, name, bio} = newUser;
    setCurrentUser({avatar_url, login, name, bio});
    
    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();
    console.log(newRepos);

    if(newRepos.length){
      setRepos(newRepos);
    }
  }


}

  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background}  className='background-img' alt='background app'/>
        <div className='info'>
          <div className='busca'>
          <input name='usuario' value={user} onChange={event => setUser(event.target.value)} placeholder='@username' />
          <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (<>
          <div className='perfil'>
            <img className='profile-pic' src={currentUser.avatar_url} alt='Foto de Perfil'/>
            <div>
              <h3>{currentUser.name}</h3>
              <span>@{currentUser.login}</span>
              <p>
                {currentUser.bio}
              </p>
            </div>
          </div>
            </>
          ) : (<>
            <div className='perfil'>
              <img className='profile-pic' src='https://avatars.githubusercontent.com/u/105157243?v=4' alt='Foto de Perfil'/>
              <div>
                <h3>Nome do Usuario</h3>
                <span>@username</span>
                <p>
                  Descrição do perfil do usuario.
                </p>
              </div>
            </div>
              </>
            )}
            <hr />
          <div>
              <h4>Repositorios</h4> 
            {repos?.length ? (
              <>{repos.map(repo => {
                return <ItemList title={repo.name} description={repo.description} />;
              })}
              </>
            ): (<>
              <ItemList title="Repositorio 1" description="Descrição do repositorio 1." /> 
              <ItemList title="Repositorio 2" description="Descrição do repositorio 2." /> 
              <ItemList title="Repositorio 3" description="Descrição do repositorio 3." /> 
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
