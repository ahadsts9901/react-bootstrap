import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import AccordionBS from './ReactBootsrap/AccordionBS'
import AlertBS from './ReactBootsrap/AlertBS';

import { Button } from "react-bootstrap"
import CardBS from './ReactBootsrap/CardBS';
import CarouselBS from './ReactBootsrap/CarouselBS';
import DropDownBS from './ReactBootsrap/DropDownBS';
import ListGroupBS from './ReactBootsrap/ListGroupBS';
import ModalBS from './ReactBootsrap/ModalBS';
import NavbarBS from './ReactBootsrap/NavbarBS'
import AppBarBS from './ReactBootsrap/AppBarBS';
import ProgressBarBS from './ReactBootsrap/ProgressBarBS';
import TabBS from './ReactBootsrap/TabBS';
import ToastBS from './ReactBootsrap/ToastBS';

const App = () => {
  return (
    <>


      {/* <AccordionBS title="ABC Title" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam. Velit excepturi distinctio blanditiis voluptatibus aliquam accusantium molestias nihil! Id nihil voluptates provident laborum qui distinctio debitis corrupti rerum." /> */}

      {/* <AlertBS variant="warning" title="I am an alert" /> */}

      {/* badges are good in chakra and ant-design */}

      {/* <Button variant='dark'>Button</Button> */}

      {/* <CardBS title="Mountain view is amazing" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam. Velit excepturi distinctio blanditiis voluptatibus aliquam accusantium molestias nihil! Id nihil voluptates provident laborum qui distinctio debitis corrupti rerum."
        button="Add To Cart" image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      /> */}

      {/* <CarouselBS
        items={[
          {
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageText: "Mountains",
            title: "Mountain view is amazing",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam."
          },
          {
            image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageText: "Hill",
            title: "Hill view is amazing",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam."
          },{
            image: "https://images.unsplash.com/photo-1616911821230-b7ca42658b64?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageText: "Sun",
            title: "Sun view is amazing",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam."
          },{
            image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageText: "Forest",
            title: "Forest view is amazing",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam."
          },
        ]}
      /> */}

      {/* <DropDownBS title="More" variant="primary"
        items={[
          {
            title: "Home",
            link: "/"
          }, {
            title: "About",
            link: "/about"
          }, {
            title: "Contact",
            link: "/contact"
          }, {
            title: "Services",
            link: "/services"
          }, {
            title: "Portfolio",
            link: "/portfolio"
          },
        ]}
      /> */}

      {/* <ListGroupBS items={[
        "Pakistan", "Palestine", "India", "America", "Japan", "China", "Bangladesh", "Turkey", "Afghanistan"
      ]} /> */}

      {/* <ModalBS primary="Open" secondary="Close" title="Open account" body="Open your account" /> */}

      {/* <NavbarBS bg="danger" theme="dark" title="Ahad STS"
        items={[
          {
            title: "Home",
            link: "/"
          }, {
            title: "About",
            link: "/about"
          }, {
            title: "Contact",
            link: "/contact"
          }, {
            title: "Services",
            link: "/services"
          }, {
            title: "Portfolio",
            link: "/portfolio"
          },
        ]}
      /> */}

      {/* <AppBarBS
        items={[
          {
            title: "Home",
            link: "/"
          }, {
            title: "About",
            link: "/about"
          }, {
            title: "Contact",
            link: "/contact"
          }, {
            title: "Services",
            link: "/services"
          }, {
            title: "Portfolio",
            link: "/portfolio"
          },
        ]}
      /> */}

      {/* tooltip is good but I used it in chakra-ui, ant-design & daisy-ui */}

      {/* skeleton is also good but I used it in chakra-ui, ant-design & daisy-ui */}

      {/* <ProgressBarBS now={46} striped animated variant="success" label={`Progress is ${46}%`} /> */}

      {/* tables and spinners are good but I used it in chakra-ui, ant-design & daisy-ui */}

      {/* <TabBS
        items={[
          {
            title: "Home",
            link: "/"
          }, {
            title: "About",
            link: "/about"
          }, {
            title: "Contact",
            link: "/contact"
          }, {
            title: "Services",
            link: "/services"
          }, {
            title: "Portfolio",
            link: "/portfolio"
          },
        ]}
      /> */}

      {/* <ToastBS title="Toast title" time="few minutes ago" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quis aliquam. Velit excepturi distinctio blanditiis voluptatibus aliquam accusantium molestias nihil! Id nihil voluptates provident laborum qui distinctio debitis corrupti rerum." /> */}

    </>
  )
}

export default App