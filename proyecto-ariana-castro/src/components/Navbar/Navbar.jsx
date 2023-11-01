import { CartWidget } from "../CartWidget/CartWidget"

export const Navbar = () => {
  return (
    <div>
        <h6>Marale Kids</h6>
        <ul>
            <li>
                <p>Niños</p>
            </li>
            <li>
                <p>Niñas</p>
            </li>
        </ul>
<CartWidget />
    </div>
  )
}
