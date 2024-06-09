import React from 'react'

const About = () => {
  return (
    <>
        <div className="flex justify-evenly gap-6 md:gap-0 items-center p-6 pt-8 bg-zinc-100 about-container flex-col-reverse md:flex-row dark:bg-gray-900">
            <div className="md:w-1/3 w-4/5 about-txt">
                <h2 className='text-4xl font-bold mb-2 text-reddish'>About Us</h2>
                <p className='opacity-70 text-sm mb-4 dark:text-zinc-200 dark:opacity-80'>At ShopE, we believe in the power of convenience, choice, and exceptional service. Our journey began with a simple yet ambitious goal: to create an online shopping destination that offers an unparalleled experience for our customers.</p>

                <h2 className='text-4xl text-reddish mb-2 font-bold'>Our Story</h2>
                <p className='opacity-70 text-sm dark:text-zinc-200 dark:opacity-80'>Founded in 2024, ShopE quickly established itself as a trusted name in the world of online retail. What sets us apart is our unwavering commitment to quality, reliability, and innovation. With a team of dedicated professionals and a passion for exceeding expectations, we've curated a diverse range of products to cater to every need and preference.</p>
            </div>
            
            <div className="about-image w-3/5">
                <img src="https://t4.ftcdn.net/jpg/01/08/34/53/360_F_108345358_mREIebrNXJM0iuAlxvEshj1j2QrhhzpK.jpg" alt="" />
            </div>
        </div>
        <div className="flex justify-evenly items-center p-6 pt-2 bg-zinc-100 about-container flex-col md:flex-row dark:bg-gray-900">
            
            <div className="about-image w-3/5">
                <img src="https://kayako.com/wp-content/uploads/2022/03/ecommerce-customer-satisfaction-trends.jpg" alt="" className='' />
            </div>

            <div className="md:w-1/3 w-4/5 about-txt">
                <h2 className='text-4xl font-bold mt-4 mb-2 text-reddish'>What We Offer</h2>
                <p className='opacity-70 text-sm mb-4 dark:text-zinc-200 dark:opacity-80'>Whether you're searching for the latest trends in fashion, cutting-edge gadgets, or everyday essentials, ShopE has you covered. Our carefully curated selection features top brands and exclusive offerings, ensuring that you find exactly what you're looking for, every time you visit.</p>

                <h2 className='text-4xl text-reddish mb-2 font-bold'>Customer Satisfaction Guaranteed</h2>
                <p className='opacity-70 text-sm dark:text-zinc-200 dark:opacity-80'>At ShopE, customer satisfaction is our top priority. From seamless browsing and secure transactions to prompt delivery and responsive customer support, we go above and beyond to ensure that your shopping experience is nothing short of exceptional.</p>
            </div>
        </div>

        <div className="lol text-center p-4 pb-6 opacity-90 bg-zinc-100 dark:bg-gray-900 dark:text-zinc-400 dark:opacity-95">
            <h4>Thank you for choosing Us. We look forward to serve you!</h4>
        </div>
    </>
  )
}

export default About