import reactImg from '../../assets/react-core-concepts.png' // 상대경로
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){  //랜덤으로 단어 접근
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>    
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    );
  }