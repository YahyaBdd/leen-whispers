import Hero from './components/Hero'
import ImageGallery from './components/Image-Gallery'

export default function page({params : {lang}}) {
  return (
    <>
    <Hero lang = {lang}/>
    <br></br>
    <ImageGallery lang = {lang}/>
    </>
  )
}
