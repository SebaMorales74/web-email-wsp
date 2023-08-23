const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-neutral-900 text-white py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">Logo</div>
          <div>
            <p>Quiénes Somos</p>
            {/* Aquí podrías agregar más información sobre quiénes son ustedes */}
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-6">
            <a href="[Enlace de Instagram]">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Aquí debes colocar el código SVG del ícono de Instagram */}
              </svg>
            </a>
          </div>
          <div className="mr-6">
            <a href="[Enlace de Facebook]">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Aquí debes colocar el código SVG del ícono de Facebook */}
              </svg>
            </a>
          </div>
          <div>
            <a href="[Enlace de WhatsApp]">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {/* Aquí debes colocar el código SVG del ícono de WhatsApp */}
              </svg>
            </a>
          </div>
        </div>
        <div>
          <img src="[Icono de Pago]" alt="Icon" className="w-6 h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
