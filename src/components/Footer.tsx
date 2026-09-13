export default function Footer() {
    return (
        <footer className="border-t border-gray-200 mt-16">
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-xl mb-2">Dev <span className="text-pink-500">Stack</span></h3>
                    <p className="text-gray-500 text-sm mb-4">Curated tools, technologies, and resources for developers building modern software.</p>
                    <div className="flex gap-4 text-sm text-gray-600">
                        <span>GitHub</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">PRODUCT</h4>
                    <ul className="text-gray-500 text-sm flex flex-col gap-2">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">COMPANY</h4>
                    <ul className="text-gray-500 text-sm flex flex-col gap-2">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">LEGAL</h4>
                    <ul className="text-gray-500 text-sm flex flex-col gap-2">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-400">
                © 2026 Dev Stack. All rights reserved.
            </div>
        </footer>
    );
}
