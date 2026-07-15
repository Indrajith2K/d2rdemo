import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const images = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl6MWHpZooW6uKbYsH_oON88N2QtEp9GiD0MF4v4_e4KvBybiujGWvTqbS98hzM-hG5L9MKm6ZONHVA22kvamkersxSNtmvPRSX8SuSqeNh1wDvG8ftSjBHqMYZFEPfnSldHB0Aj42kyy_E=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk0yjnc1KFq3x_EEPpg3PkzH_3jmn_HvdYV_wN4aFUb2I1V0lVDFdadyOSLDSCLp_8Di_4kch9vACJ3Fn4ou7mFj_ZfuJHyTtqAFlV1_NuVvA9YL4OYa_FncfFPIUf9i8clXdQUZYdCwFqS=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm_QkAN-TyaP9u8tSnRWYMk1DT0qmRS6yECMTsArEuXy6BqmpHsv-YPYQnTYWHaZDaIXXU5VGOKDnzmolzFl5rvk7leUZKkOJkBre8603LHn10rG_3LGl29Q-bh1d1r_RH6aDhdDwA7oU8=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWktLnsxBGG-ZnbIyFFMjzhmLgTjBO4LeuZHD4jx4IOYP_BZHVoWsXJRe6AdPhtgV6fkXyqJ3rSqFqqza8SaZT8QfF_S_ZgO4rJrrCRFLh9pWhU7dUOc6KONp6Ea-D5tVMSfje0XrdSs7yo=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm6DVTn2C5lpSXzjRcQif6EenJECDsriIahgYrBxCPCLjQyX_VqvT4ur8PzhGvZmgz1EYBGVeq886HbTGI9Alc9wzy1Pq_sGuMBt0_xZdlvVgdGmxpohOwrc0YWHfBZKwQrXIzPeQDLe-M=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkiw5Je0ocCZwkqwh2vBZPj_6i-fmijUrxlFAmhLKGHX_aZz3d3E7nysDCObM12tzYRbONA46RaR90HZyXw_PvFUX9Mzua6V3POQterZaVZbPxXqZMlpqLara0GVYCg_lQzqYro7r0Q891G=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmBhz2-QTI5jWo0W8OQh6Euu7Cb2LP4Bg2VHwDwzbcoN2_LgS_mNYZ1B_lo-aoMddB9a-ArC-2ut34ISNRxL84rEq3ZYV_rPOm_KvcPyg-2jGMtAISH8UYa0w_W_e85xgdErq63FYwuy7Y=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3zRInAZEx522BwvxOBGs0Imd7OebqBvVc57EzwgQcJJA8JJM3HCsm9zC9HMyejvok3KFunfR12oTKV-CxhRX9uu5zA0pxPTmfzdbgahy0FAzryibuX49YzUAOzPNBDfBwYTCL4THa4S0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmo3ANywN2eK-4n8g-Jd_udbIcEqH7a4vu5VoSyr5uiM6lb-84Q6_hebQJFePfM3Uc-JMlm5uwDsmNnwXITpRXB4C58nvBkUVIPYnvlADXrKJkDrcsjpHxX6QdO3GKDtyw70PtWY5oR4g=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk-i70IvXgt09-AeO_JxPlQ3LglbRZ2c6EUfW2g3iYAF5OBmX05OgRk_WRhFA6942EZc_LwQXtTbIwAEL5RLwBBW4PzMCc9vt37QMUhRHDbH9nsc-mu0OUZ_bRMlZRutHC3UEbKgBYayctR=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlXxXDUz7leaNq4tSkgTqAKcBVKUVSMlc8p-r0Fksze5cV6mk1gZYMH1b-X_AJZEHRp0Hi0riMMGDhjVUebjJPUfdb2KXO8IfvDikuboWYK-JlfSK1Z8XgKf4tZbisKx2s-0q6vHlyE69c=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmlTKHRnSbMM91Zl0-1ulX9P_0QMvgc5XXPhKxGodXoQWvaN3UmNUkJyghUH0rVx9cgJk0of4rXPQTe4Ri4i57hpP8kt4RzBLN7df_RqHB_2wIuZnVDqQw2V1-WoQZlFjTXBsKOKsHUEHDD=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlhww8RnGYMIHRNcp888nAtfb5RAwYQSJyjjRt46s9yq0hscHCBQWatYLMXoic-DwuqSTYzBnJ5BsYfwJd4JWvQPm6zrAtvhNRWEvz3btPLygRfnIiSzgg429IMqXLezqv3CKAgraOGL-IN=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCfLskydeZ-BM_R2ozE20GF_35KcSzkmol9eqj1WWbbuTgQmk7xjcTh0hxp4FSV7BmI-hELUwOM3I1yeY6AJTwA9RaQJ9c9Jq-Y35xA4DXtvYPMhiNgBMao66wJpNR1cVHx3oVEn0P5bgG=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmo_sviRcE_9pR3BItriwISQPyGJ2GGFsQ7YOmIErWjPiUYvyWRd1_l-6C2-2ro97XqBZrhl3fK6wlkhuJTPz4-2hzva0VOpXbuQ8_9ViLiSiHV9-72SJz3G0kiPCMhAzYtEAXZSoqv27Hy=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnogGax5ndFVf1qMx7dIjwt0EVhGCyJyn9vMTAA-g2NIocUHgPmh7V7y6jMvmj3pNPwOaZV_O0lAUeCdpV27F8_F5ShHLbmhtOSDl6_d0n_umz2wkkTyJU3nM7_qh4YAT4gXda6xwlavfw=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnAUGqsJHBGfiUWUd7HnGaZAlI0XGwK4dI28YmtNKlfMDK3pb_1dAOLNDPIOFbTrkRoUaHZRe7Uex_rKiKTIYkV8EZqn6hlGiCHO2ww0ymwYK8jZsfVKu5tS4UOxcqbK7qLp1MslOcufUAq=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlE1x-QW2XEYbMbc1FexErUWKxRTMU00NKjVqrmFLtGK_4uhECBSPOAjoJIcsfs83xCXWRSqwmQZwUnNJZ2GmPn_0sh9x65DPVMYumNTXT_rUPkVHGneqFjgf6BkAR04tdEO_JbBlo_DheB=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlsXdSV_pz660K0nj8wRMG7SL3bzxJBFun9MIa7kFhhju9kkIPNwxysSXan_2yL9krA5qqNyYssVQ_1LfEgZSj4YD0HcWM5ekiYYkwLXXjQSXnFo1yGk2ftF0ijvAN86rxu6fzYrqeNH-1Y=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCPEJ3uIoJKl4NFm5ry6H1jOJZTo-awFAuSWyujLpNl87j7IeuYafmG5sRXjoT2RhXcbnousDT_N48Jc5FeeBJKLuTToJ3Q2wWuw19qbo93i9IoJgzZ778bCGKfWzCVcRub6cSjsAuHJk-=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCK3gIbTzNM45x7iVItBsfiptTnqWZ6fKO30O7TYaZq26D_HOPihZIDvhgToR2fi4x84Z2W3UD96l-wvfFKfday1x7KIEueWRAfbEiP_I5U4Nl7f6945snBne2MuuORLlWx8wqGkRPVlY0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm7ueP5Q649cX4goQ8uGjD7TKwz1R2QYX_GExkPEgoYQ4qIPFASJn-gPRIRE7CsLDuMMwzIaisEhAV9qg3v7lM2CG-59a96oMQlDocLmkbNmjG0oorIfnRFbnPxikxqHj4BK7hHu0H42CHP=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk5y1Efw2Go6F4Zci4oYByV245XzlgD0ZQi8cGSWf_nMd_JkPsnHYeixHCU43iBIfoZEdWZwzs55vM79j2hFoi6r4B-XPBvnMqPYwsC3OkkRSKnCIsCzTmgkbUumnqFLPu-UVmKV1geuB1o=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkSqt_tXiQbMAobNRsZDtLCpkgUIH0ocBNwxFDJl-P4bimmcmt6EcAPWEDwAKQ4ZqhX0TsxcZpU6Yz9Z5Qo4zNF0mrXIyzmAHEDiBvzHlWy9BReihsD9r9wqql-l_LaNUfq7WLMXq95cFed=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmLg-cj14kou1e9TmbHjt4bA9veVQwgN-yvixcImSmGh_QApFfl-zHRgPFW4gKmRjOxtT7JS_CVYhYNzJ6_rxsW14VBGyOMlmn6Eg06E-evkN7jTRs2jjz8tCyQqWE17nsWUbIpuruGrGQz=s1360-w1360-h1020-rw"
];

// Removed duplicate URL from the array (the last two were identical in the prompt, actually I just left them as is to be safe, but a Set deduplicates).
const uniqueImages = Array.from(new Set(images));

const CardsCarousel = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 font-playfair mb-4">
          Capturing Moments
        </h2>
        <p className="text-lg text-slate-500 font-sans max-w-2xl mx-auto">
          Take a look at some of the beautiful moments captured during our tours.
        </p>
      </div>

      <div className="w-full mx-auto px-0 sm:px-4 pb-12">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-12"
        >
          {uniqueImages.map((img, index) => (
            <SwiperSlide key={index} className="max-w-[280px] sm:max-w-[400px] md:max-w-[500px]">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] sm:aspect-[4/5] bg-slate-200">
                <img src={img} alt={`Travel moment ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <style>{`
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 280px;
        }
        @media (min-width: 640px) {
          .swiper-slide {
            width: 400px;
          }
        }
        @media (min-width: 768px) {
          .swiper-slide {
            width: 500px;
          }
        }
        .swiper-pagination-bullet {
          background: #4F46E5 !important;
        }
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none !important;
        }
      `}</style>
    </section>
  );
};

export default CardsCarousel;
