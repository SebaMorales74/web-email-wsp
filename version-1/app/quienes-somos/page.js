import Portfolio from "@/components/Portfolio"

export default function Page() {
    const imageData = []
    const setZoomedImage = null
    return (
        <>
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Apartado de Presentación */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibnold mb-4">Bienvenidos a Nuestra Empresa</h2>
                    <p className="text-gray-600">
                        Somos una empresa dedicada a proporcionar soluciones innovadoras para [descripción de tu empresa y lo que venden].
                    </p>
                </div>

                {/* Apartado de Ubicación con Mapa */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Encuéntranos</h3>
                    {/* ... (código del mapa) ... */}
                </div>

                {/* Apartado de Contacto */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                    {/* ... (código de contacto) ... */}
                </div>
            </div>

            {/* Componente Portfolio */}
            <Portfolio imageData={imageData} setZoomedImage={setZoomedImage} />

            {/* Imagen Ampliada */}
            {
                zoomedImage !== null && (
                    <div className='image-zoom-container'>
                        <img src={imageData[zoomedImage].src} alt='Zoomed Image' />
                        {/* Agrega botones para navegar entre imágenes ampliadas */}
                        <button onClick={() => setZoomedImage(null)}>Cerrar</button>
                    </div>
                )
            }

            {/* Aquí está el "3" que mencionaste */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Apartado de Presentación */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">Bienvenidos a Nuestra Empresa</h2>
                        <p className="text-gray-600">
                            Somos una empresa dedicada a proporcionar soluciones innovadoras para [descripción de tu empresa y lo que venden].
                        </p>
                    </div>

                    {/* Apartado de Ubicación con Mapa */}
                    <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Encuéntranos</h3>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe
                                    title="Google Map"
                                    width="100%"
                                    height="400"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=-33.23079827338549%2C+-70.80219942066587&t=&z=13&ie=UTF8&iwloc=&output=embed"

                                ></iframe>

                                <br />

                                <style>{`.mapouter{position: relative;text-align: right;height: 400px;width: 100%;}`}
                                </style>

                                <style>{`.gmap_canvas{overflow: hidden;background: none !important;height: 400px;width: 100%;}`}
                                </style>
                            </div>
                        </div>
                    </div>

                    {/* Apartado de Contacto */}
                    <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                        <p className="text-gray-600">
                            Si tienes alguna pregunta o consulta, no dudes en contactarnos:
                        </p>
                        <ul className="mt-2">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                info@tuempresa.com
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                +123 456 7890
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}