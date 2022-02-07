// import PaintingList from './components/paintingsList';
// import Section from './components/Section';
//  import painting from './painting.json';
// import ColorPeacker from './ColorPiacker/ColorPeacker';
import AlertWindow from './Alert/Alert';
import Container from './Container/Container';
//====Создаем главный компонет в файле App.js====//

// const colorPeackerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' }
// ];
export default function App() { 
  return (
    <div>
      {/* <PaintingList item={paintings}/> */}
    
      {/* <PaintingList item={painting} /> */}
      <Container>
      <AlertWindow text='Green' type='success' />
      <AlertWindow text='Orange' type='warning' />
      <AlertWindow text='Red'  type='error'/>
      </Container>
     
     
      {/* <ColorPeacker options={colorPeackerOptions}/> */}
    </div>
  ); 
}