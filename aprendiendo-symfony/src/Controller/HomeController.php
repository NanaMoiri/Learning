<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="app_home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'hello' => 'Hola mundo con Symfony',
        ]);
    }

    public function animales($nombre, $apellidos) {
        $title = 'Bienvenido a la pagina Animales';
        $animales = array('perro', 'gato', 'paloma', 'rata');
        $aves = array(
            'tipo' =>'paloma', 
            'color' => 'blanca', 
            'edad' => 4, 
        );

        return $this->render('home/animales.html.twig', [
            'title' => $title,
            'nombre' => $nombre,
            'apellidos' => $apellidos,
            'animales' => $animales,
            'aves' => $aves
        ]);
    }

    public function redirigir() {
        ////METODO 1
        // return $this-> redirectToRoute('index', array(), 301);
        // return $this-> redirectToRoute('animales', [
        //     'nombre' => 'Cebra',
        //     'apellidos' => '1'
        // ]);

        //METODO 2
        return $this->redirect('https://victorroblesweb.es/academy');
    }
}
