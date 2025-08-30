import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-gray-200">  
      <hr className="border-gray-600" />  
      <footer className="footer footer-center p-4 rounded-b-lg dark:bg-slate-900">  
        <nav className="grid grid-flow-col gap-6 mb-2">  
          <a className="link link-hover text-lg hover:text-pink-500 transition duration-300" href="#">About </a>  
          <a className="link link-hover text-lg hover:text-pink-500 transition duration-300" href="#">Contact</a>  
          <a className="link link-hover text-lg hover:text-pink-500 transition duration-300" href="#">Jobs</a>  
          <a className="link link-hover text-lg hover:text-pink-500 transition duration-300" href="#">Press Kit</a>  
        </nav>  
        <nav className="mb-2">  
          <div className="grid grid-flow-col gap-4">  
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                className="fill-current hover:text-pink-500 transition duration-300"
              >
                <path d="M23.498 6.186c.191 1.433.191 2.916.191 4.311s-.073 2.886-.191 4.319c-.203 1.506-1.727 2.416-3.232 2.416-1.932 0-3.932-.004-5.938 0-1.923.006-3.09-.829-3.9-2.39-.591-1.289-1.007-2.951-1.007-4.575 0-1.632.396-3.292 1.007-4.577.837-1.566 2.004-2.396 3.9-2.39 2.006-.004 4.006 0 5.938 0 1.505 0 3.029.91 3.232 2.417z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                className="fill-current hover:text-pink-500 transition duration-300"
              >
                <path d="M19.635 7.997c.014.213.014.426.014.639 0 6.534-4.972 14.048-14.048 14.048-2.787 0-5.369-.817-7.523-2.228.387.044.771.059 1.154.059 2.257 0 4.336-.764 6.008-2.045-2.107-.045-3.885-1.426-4.512-3.338.296.055.598.085.905.085-.436 0-.861-.059-1.271-.174-2.206-.439-3.867-2.378-3.867-4.682v-.062c.649.36 1.391.577 2.173.604-1.287-.86-2.129-2.327-2.129-4.007 0-.878.237-1.698.652-2.397 2.314 2.835 5.778 4.694 9.618 4.895-.079-.351-.118-.708-.118-1.064 0-2.571 2.043-4.615 4.615-4.615 1.325 0 2.524.557 3.354 1.501.325-.064.634-.183.913-.351-.108.335-.336.618-.631.829.291-.033.563-.112.817-.225-.269.291-.611.547-.989.752.279.17.569.285.845.354-.974.763-2.203 1.218-3.553 1.218-1.821 0-3.477-.693-4.739-1.878z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="24"  
                height="24"  
                viewBox="0 0 24 24"  
                className="fill-current hover:text-pink-500 transition duration-300"
              >
                <path d="M22.675 0h-21.35c-.735 0-1.325.591-1.325 1.325v21.351c0 .735.591 1.325 1.325 1.325h21.351c.735 0 1.325-.591 1.325-1.325v-21.351c0-.735-.591-1.325-1.325-1.325zm-1.175 1.325v3.18h-3.024c-2.373 0-3.03 1.239-3.03 3.207v4.192h6.057l-.789 5.114h-5.268v13.159h-6.22v-13.159h-4.002v-5.114h4.002v-3.188c0-4.048 2.954-6.508 7.341-6.508 2.087 0 3.863.155 4.388.224z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-sm">Copyright © 2024 - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
