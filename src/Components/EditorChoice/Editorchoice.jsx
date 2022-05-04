import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './EditorChoice.scss'
import { translation } from '../Data/KindsOfBooks/KindofBooks';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {Link} from 'react-router-dom'
const editorChoice = translation.slice(0,15);
console.log(editorChoice)


export default function Slider() {
  return (
  <div className='editor container'>
  <h2><BorderColorIcon/>  Editor's Choice</h2>

      <Splide options={ {
  type   : 'loop',
  perMove: 1,
  autoplay: true,
  perPage:4,
  breakpoints: {
    640: {
      perPage:2,
    },
  },
  gap    : '10px',
  pagination:false
  
  
   } }>
     {
       editorChoice.map((e)=>{
         return <SplideSlide key={e.id}>
         <Link to={`/${e.id}`}>
         <div className='choice__card'>
          <img alt="editor1" src={e.img}></img>

         </div>
         </Link>
         </SplideSlide>
       })
     }
    
    </Splide>
  </div>
  );
}