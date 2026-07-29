const Footer = () => {
  return (
    <footer className="info">
        <div className="flex justify-between ">
            <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
            <img src="/logo.svg" alt="apple logo" />
        </div>

        <hr  className="text-gray-400"/>

        <div className="flex justify-between">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

            <div className="flex items-center justify-center gap-3">
                <p>Privacy Policy |</p>
                <p>Terms of Use |</p>
                <p>Sales Policy |</p>
                <p>Legal |</p>
                <p>Site Map </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer