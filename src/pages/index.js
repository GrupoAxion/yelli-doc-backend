import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="items-center justify-between p-24">
      <div>

          <p className="text-4xl"> Introducción </p>
          <br/>
          <hr/>
          <br/>
          <div className='text-gray-600'>
            <p >¡Bienvenido a la documentación de Yelli! En esta guía, encontrará todo lo que necesita saber para empezar a utilizar nuestra plataforma blockchain para tokenizar activos inmobiliarios y otros tipos de activos.</p>
            <p> </p>
            <p>Yelli es una plataforma innovadora que utiliza tecnología blockchain para hacer que el proceso de tokenización de activos sea más accesible, seguro y eficiente. Nuestra plataforma permite a los desarrolladores y usuarios administradores crear y administrar tokens de activos, lo que puede ayudar a democratizar el acceso a los mercados financieros y mejorar la liquidez de los activos.</p>
            <p> </p>
            <p>En esta documentación, encontrará información detallada sobre cómo utilizar Yelli para crear y administrar tokens de activos, así como guías detalladas para desarrolladores sobre cómo integrar la plataforma en sus aplicaciones existentes. También proporcionamos información sobre las características de seguridad de Yelli y cómo se implementan las mejores prácticas de seguridad en nuestra plataforma.</p>
            <p> </p>
            <p>Si tiene alguna pregunta o necesita ayuda para utilizar nuestra plataforma, no dude en ponerse en contacto con nuestro equipo de soporte técnico. Estamos aquí para ayudarle a aprovechar al máximo Yelli y estamos comprometidos con su éxito en la tokenización de activos.</p>
            <p> </p>
            <p>¡Gracias por elegir Yelli! Estamos emocionados de trabajar con usted para revolucionar la tokenización de activos y democratizar el acceso a los mercados financieros.</p>
          </div>

        </div>
    </main>
  )
}
