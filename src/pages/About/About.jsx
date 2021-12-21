import style from './About.module.scss'

function About() {
   return (
      <section className={style.about}>
         <h2>Sobre</h2>
         <div className={style.about__content}>
            <div className={style.about__content__image}></div>
            <p>
               Olá, eu sou o José, vulgo 'ArseniumGX'. Sou desenvolvedor NodeJS
               backend Jr. Atualmente (2021) sou estudante no curso de
               certificação de desenvolvedores na Blue EdTech, na trilha
               Fullstack. Possuo domínio da linguagem Javascritp voltado para
               web, sempre faço uso pesado de conceitos novos que estou
               aprendendo em meus projetos pessoais.
               <br />
               <br />
               Esse é mais um dos projetos que desenvolvi utilizando todos os
               conceitos que aprendi até aqui tanto backend como frontend.
               Visite meus perfis sociais nos link abaixo.
            </p>
         </div>
      </section>
   )
}

export { About }
