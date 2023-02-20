import './Banner.css'

function Banner() {
//JSX, não é HTML, é JSX, é como o React tranforma em elementos do DOM //
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="Banner Principal da página do Organo"/>
        </header>
    )
}

export default Banner