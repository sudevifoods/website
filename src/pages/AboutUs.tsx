
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Sudevi Agro Foods</title>
        <meta name="description" content="Learn about Sudevi Agro Foods - our history, mission, values, and the team behind our authentic Indian food products." />
      </Helmet>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Us</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Learn about our journey, mission, and the people behind Sudevi Agro Foods.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sudevi Agro Foods Private Limited was established in 2025 with a vision to bring authentic Indian flavors to modern kitchens. Our journey began in Balasore, Odisha, where we set up our first manufacturing facility.
              </p>
              <p className="text-gray-700 mb-4">
                Built on the foundation of preserving traditional recipes and culinary heritage, we have grown from a small local business to a respected name in the food industry.
              </p>
              <p className="text-gray-700">
                Our commitment to quality, authenticity, and customer satisfaction has been the driving force behind our success and continues to guide us as we grow.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Story" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1563865436874-9aef32095fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Mission" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-gray-700 mb-4">
                Our mission is to preserve and share the rich culinary traditions of India through high-quality food products that meet modern standards of nutrition, safety, and convenience.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Our Core Values:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Quality - We never compromise on the quality of our ingredients and products.</li>
                <li>Authenticity - We stay true to traditional recipes and flavors.</li>
                <li>Innovation - We constantly seek ways to improve our products and processes.</li>
                <li>Sustainability - We are committed to environmentally responsible practices.</li>
                <li>Community - We support local farmers and suppliers whenever possible.</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Leadership</h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Meet the dedicated team leading Sudevi Agro Foods towards excellence and growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5">
                      <img 
                        src="/lovable-uploads/d0e784b9-5979-40e9-ab69-67edccb0c8e9.png"
                        alt="Mr. AMAR KUMAR BINDHANI" 
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="p-6 w-full md:w-3/5">
                      <h3 className="text-xl font-semibold mb-1">Mr. AMAR KUMAR BINDHANI</h3>
                      <p className="text-sudevi-red mb-3">Managing Director</p>
                      <p className="text-gray-600">
                        Mr. Amar Kumar Bindhani has vast experience in sales and marketing growth planning. 
                        He has worked in various industries including Reliance Retail and JioMart B2B. His expertise in 
                        market development and strategic planning guides Sudevi Agro Foods towards new heights of success.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5">
                      <img 
                        src="/lovable-uploads/6c22abad-0854-4624-aea3-1181c89c4fa9.png"
                        alt="Mr. KISHORE KUMAR BINDHANI" 
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="p-6 w-full md:w-3/5">
                      <h3 className="text-xl font-semibold mb-1">Mr. KISHORE KUMAR BINDHANI</h3>
                      <p className="text-sudevi-red mb-3">Operations Director</p>
                      <p className="text-gray-600">
                        Mr. Kishore Kumar Bindhani brings extensive experience in manufacturing industries and the food processing 
                        sector. Having worked at Alpla India Pvt. Ltd., he oversees our production facilities and ensures 
                        that all products meet our high quality standards while maintaining operational efficiency.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Company Information</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Company Details</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Company Name:</strong> Sudevi Agro Foods Private Limited</li>
                    <li><strong>Established:</strong> 2025</li>
                    <li><strong>CIN:</strong> U10306OD2025PTC049131</li>
                    <li><strong>Type:</strong> Private Limited Company</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Facility</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Address:</strong> Plot No:- 1730/2463/9212, AT- Mohammadpur, Badakhua Lane, Sunhat, Balasore, 756002</li>
                    <li><strong>Size:</strong> [Add facility size]</li>
                    <li><strong>Certifications:</strong> [Add any certifications]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
