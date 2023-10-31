import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import "./App.css";
import graphic from "./assets/graphic.png";
import { Divider } from "@nextui-org/react";
import LoginModal from "./LoginModal";
import StartTrialModal from "./StartTrialModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [beginTrialModalOpen, setBeginTrialModalOpen] = useState(false);

  const [loginModalState, setLoginModalState] = useState(false);

  // function handleCloseLoginModal() {
  //   setLoginModalState(false);
  // }

  function handleCloseModalLogin() {
    setLoginModalState(false);
  }

  function handleCloseTrialModal() {
    setBeginTrialModalOpen(false);
  }

  return (
    <div className="px-8 flex flex-col items-center lg:px-16">
      <Navbar position="static" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />

          <NavbarBrand>
            <p className="font-bold text-inherit">RandomSAAS</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Demo
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link
              className="text-green-600"
              href="#"
              onClick={() => {
                setLoginModalState(true);
              }}
            >
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              className="invisible sm:visible bg-green-600 text-white text-md rounded-3xl px-5"
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link
              onClick={() => setLoginModalState(true)}
              className="w-full"
              href="#"
              size="lg"
            >
              Login
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <div className="flex flex-col items-center mt-14 lg:flex-row ">
        <div className="flex flex-col gap-4 items-start mt-8  lg:max-w-5xl">
          <div className="lg:max-w-5xl flex flex-col gap-10 ">
            <p className="text-5xl sm:text-6xl font-extrabold leading-normal md:leading-relaxed lg:font-bold  ">
              Manage Your Business{" "}
              <span className="text-green-500">Finance</span> Easily
            </p>
            <p>
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium purus pretium ligula
            </p>
          </div>
          <button
            onClick={() => setBeginTrialModalOpen(true)}
            className="bg-green-500 text-white px-6 py-3 rounded-3xl text-lg"
          >
            Start 14 Days Trial
          </button>
        </div>

        <img
          className="max-w-6xl w-80 lg:w-5/6 lg:max-w-xl"
          src={graphic}
        ></img>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row ">
        <div className="flex flex-col items-center gap-8">
          <p className="text-6xl font-bold">115K</p>
          <p className="text-gray-400">Active Users</p>
          <Divider />
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-6xl font-bold">88k+</p>
          <p className="text-gray-400">Passive Users</p>
          <Divider />
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-6xl font-bold">30%+</p>
          <p className="text-gray-400">Increase in Revenue</p>
          <Divider />
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="text-6xl font-bold">&#62;10K</p>
          <p className="text-gray-400">Good Testimonials</p>
          <Divider />
        </div>
      </div>

      <LoginModal open={loginModalState} handleClose={handleCloseModalLogin} />
      <StartTrialModal
        open={beginTrialModalOpen}
        handleClose={handleCloseTrialModal}
      />
    </div>
  );
}

export default App;
