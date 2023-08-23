export default function Page() {
    const setZoomedImage = null
    const zoomedImage = null
    return (
        <div className="p-6">
            {
                zoomedImage !== null && (
                    <div className='image-zoom-container'>
                        <img src={imageData[zoomedImage].src} alt='Zoomed Image' />
                        {/* Agrega botones para navegar entre imágenes ampliadas */}
                        <button onClick={() => setZoomedImage(null)}>Cerrar</button>
                    </div>
                )
            }

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white text-black p-4">
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6">
                        <h2 className="text-2xl font-semibold mb-4">Bienvenidos a Nuestra Empresa</h2>
                        <p>
                            Somos una empresa dedicada a proporcionar soluciones innovadoras para [descripción de tu empresa y lo que venden].
                        </p>
                    </div>

                    <div className="col-span-1 p-6 border">
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

                    <div className="col-span-1 p-6">
                        <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                        <p>
                            Si tienes alguna pregunta o consulta, no dudes en contactarnos:
                        </p>
                        <ul className="mt-2">
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                info@tuempresa.com
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                +123 456 7890
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}