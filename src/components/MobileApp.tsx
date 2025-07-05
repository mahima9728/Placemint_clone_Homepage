// import React from "react";
// import { Button } from "@/components/ui/button";
// import phoneImage from "../assets/phone.png";

// const MobileApp = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-background to-card/50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
//             Placemint Mobile App
//           </h2>
//           <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
//             Find Placemint On{" "}
//             <span className="gradient-text">App Store & Play Store!</span>
//           </h3>
//           <div className="inline-block px-6 py-3 bg-accent/20 rounded-full">
//             <span className="text-accent font-bold text-lg">
//               Launching Soon!
//             </span>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* App Store Buttons */}
//             <div className="space-y-2">
//               <div className="text-center md:text-left"><img
//         src={phoneImage}
//         alt="Placemint Phone"
//         className="h-full object-contain"
//       />
//                 {/* <h4 className="text-2xl font-bold text-white mb-4">
//                   Get ready for the ultimate job search experience
//                 </h4> */}
//                 {/* <p className="text-white/70 mb-8">
//                   Soon you'll be able to access unlimited job opportunities right from your mobile device.
//                   Stay tuned for the most convenient way to land your dream job!
//                 </p> */}
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                 {/* App Store Button */}
//                 <Button
//                   variant="outline"
//                   className="glass-card border-white/20 hover:bg-white/10 px-6 py-4 h-auto"
//                   disabled
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                       <div className="text-white text-xs font-bold">📱</div>
//                     </div>
//                     <div className="text-left">
//                       <div className="text-xs text-white/60">
//                         Download on the
//                       </div>
//                       <div className="text-white font-semibold">App Store</div>
//                     </div>
//                   </div>
//                 </Button>

//                 {/* Play Store Button */}
//                 <Button
//                   variant="outline"
//                   className="glass-card border-white/20 hover:bg-white/10 px-6 py-4 h-auto"
//                   disabled
//                 >
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                       <div className="text-white text-xs font-bold">▶️</div>
//                     </div>
//                     <div className="text-left">
//                       <div className="text-xs text-white/60">Get it on</div>
//                       <div className="text-white font-semibold">
//                         Google Play
//                       </div>
//                     </div>
//                   </div>
//                 </Button>
//               </div>
//             </div>

//             {/* Phone Mockup */}
//             <div className="flex justify-center">
//               <div className="glass-card rounded-3xl p-8 max-w-sm">
//                 <div className="aspect-[9/16] bg-gradient-to-b from-primary/20 to-accent/20 rounded-2xl flex flex-col items-center justify-center space-y-6">
//                  <div className="aspect-[9/16] bg-gradient-to-b from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
//       <img
//         src={phoneImage}
//         alt="Placemint Phone"
//         className="h-full object-contain"
//       />
//                   {/* App Icon */}
//                   {/* <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
//                   <div className="text-2xl font-bold text-white">P</div>
//                   </div> */}

//                   {/* App Name */}
//                   {/* <div className="text-center">
//                     <h4 className="text-xl font-bold text-white">Placemint</h4>
//                     <p className="text-white/60 text-sm">
//                       Job Search Made Easy
//                     </p>
//                   </div> */}

//                   {/* Features List */}
//                   {/* <div className="space-y-3 text-center">
//                     <div className="text-white/80 text-sm">
//                       ✨ Unlimited Interviews
//                     </div>
//                     <div className="text-white/80 text-sm">
//                       🎯 Smart Job Matching
//                     </div>
//                     <div className="text-white/80 text-sm">
//                       📱 On-the-go Applications
//                     </div>
//                     <div className="text-white/80 text-sm">
//                       🚀 Quick Notifications
//                     </div>
//                   </div> */}

//                   {/* Coming Soon Badge */}
//                   {/* <div className="px-4 py-2 bg-accent/30 rounded-full">
//                     <span className="text-accent text-sm font-semibold">
//                       Coming Soon
//                     </span>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MobileApp;

import React from "react";
import { Button } from "@/components/ui/button";
import phoneImage from "../../public/phone.png";

const MobileApp = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
            Placemint Mobile App
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            Find Placemint On{" "}
            <span className="gradient-text">App Store & Play Store!</span>
          </h3>
          <div className="inline-block px-6 py-3 rounded-full">
            <span className=" font-bold text-lg">Launching Soon!</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* App Store Buttons */}
            <div className="space-y-2">
              <div className="text-center md:text-left">
                {/* <h4 className="text-2xl font-bold text-white mb-4">
                  Get ready for the ultimate job search experience
                </h4> */}
                {/* <p className="text-white/70 mb-8">
                  Soon you'll be able to access unlimited job opportunities right from your mobile device. 
                  Stay tuned for the most convenient way to land your dream job!
                </p> */}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* App Store Button */}
                <Button
                  variant="outline"
                  className="glass-card border-white/20 hover:bg-white/10 px-6 py-4 h-auto"
                  disabled
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="text-white text-xs font-bold">📱</div>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-white/60">
                        Download on the
                      </div>
                      <div className="text-white font-semibold">App Store</div>
                    </div>
                  </div>
                </Button>

                {/* Play Store Button */}
                <Button
                  variant="outline"
                  className="glass-card border-white/20 hover:bg-white/10 px-6 py-4 h-auto"
                  disabled
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="text-white text-xs font-bold">▶️</div>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-white/60">Get it on</div>
                      <div className="text-white font-semibold">
                        Google Play
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="glass-card rounded-3xl p-8 max-w-sm">
                <div className="aspect-[9/16] bg-gradient-to-b from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <img
                    src={phoneImage}
                    alt="Placemint Phone"
                    className="h-full object-contain"
                  />

                  {/* App Icon */}
                  {/* <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">P</div>
                  </div> */}

                  {/* App Name */}
                  {/* <div className="text-center">
                    <h4 className="text-xl font-bold text-white">Placemint</h4>
                    <p className="text-white/60 text-sm">
                      Job Search Made Easy
                    </p>
                  </div> */}

                  {/* Features List */}
                  {/* <div className="space-y-3 text-center">
                    <div className="text-white/80 text-sm">✨ Unlimited Interviews</div>
                    <div className="text-white/80 text-sm">🎯 Smart Job Matching</div>
                    <div className="text-white/80 text-sm">📱 On-the-go Applications</div>
                    <div className="text-white/80 text-sm">🚀 Quick Notifications</div>
                  </div> */}

                  {/* Coming Soon Badge */}
                  {/* <div className="px-4 py-2 bg-accent/30 rounded-full">
                    <span className="text-accent text-sm font-semibold">Coming Soon</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
