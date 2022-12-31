import logo from "../../assets/images/logo-color.png";
import { A, useLocation } from "solid-start";

export default function Header() {
    const { pathname } = useLocation();

    const active = () => {
        switch(pathname){
            case "projects":return "";
            case "blog":return "";
            case "contact": return "";
            default: return "";
        }
    };

    return (
        <header class="flex justify-between">
            <div class="flex items-center">
                <img src={logo} class="w-14 rounded-full m-3" />
                <h1 class="  text-xl">Morgan Tolman</h1>
            </div>
            <nav class="flex justify-around w-72 m-3 items-center text-lg">
                <A class="mx-1 p-1" href="/">Home</A>
                <A class="mx-1 p-1" href="/projects">Projects</A>
                <A class="mx-1 p-1" href="/blog">Blog</A>
                <A class="mx-1 p-1" href="/contact">Contact</A>
            </nav>
        </header>
    )
};