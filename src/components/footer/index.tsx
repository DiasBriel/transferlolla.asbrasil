// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import MiniLogo from "../../../public/mini.png"

export default function Footer() {
  return (
    <footer className="text-white p-6 border-t-2 border-primary">
      <div className="container mx-auto flex flex-wrap justify-evenly">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-green-lola">Endereço</h3>
          <p className='text-primary font-semibold'>Rio de Janeiro</p>
          <p className="text-md">Rua São José, 20, 17 Andar Centro, Rio de Janeiro</p>
          <p className='text-primary font-semibold mt-8'>São Paulo</p>
          <p className="text-md">Condomínio Panamerica Park Av. Guido Caloi, 1000 – 4º Andar Bl. 5 – Morumbi</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-green-lola">Redes Sociais</h3>
          <ul className="text-[35px] grid grid-cols-3 gap-6 w-1/2">
            <li><Link href="https://wa.me/558008801117"><FaWhatsapp className='cursor-pointer hover:scale-105' /></Link></li>
            <li><Link href="https://www.instagram.com/as.brasil/"><FaInstagram /></Link></li>
            <li><Link href="https://www.youtube.com/@as.brasil"><FaYoutube className='cursor-pointer hover:scale-105'/></Link></li>
            <li><Link href="https://www.facebook.com/asbrasil.dmc/"><FaFacebook className='cursor-pointer hover:scale-105'/></Link></li>
            <li><Link href="https://www.tiktok.com/@as.brasil"><FaTiktok className='cursor-pointer hover:scale-105'/></Link></li>
            <li><Link href="https://www.tiktok.com/@as.brasil"><Image className='h-full object-contain cursor-pointer hover:scale-105' src={MiniLogo} alt="logo" /></Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-bold mb-2 text-green-lola">Contatos</h3>
          <p className='text-primary font-semibold'>Telefone</p>
          <p className="text-md">0800 880 1117</p>
          <p className='text-primary font-semibold mt-8'>E-mail</p>
          <p className="text-md">contato@asbrasil.tur.br</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-6 text-center">
        <p className="text-md">
          &copy; Copyright 2025 © All Right Reserved - ASBrasil
        </p>
      </div>
      
    </footer>
  );
}