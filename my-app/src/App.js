import PaintingList from './components/paintingsList';
import Section from './components/Section';
import painting from './painting.json';
// import paintings from './painting.json';
//====Создаем главный компонет в файле App.js====//
export default function App() { 
  return (
    <div>
      {/* <PaintingList item={paintings}/> */}
      <Section title="Top">
        <PaintingList item={painting123} />
      </Section>
      <Section title='The best'>
           <PaintingList item={painting} />
      </Section>
      
    </div>
  ); 
}