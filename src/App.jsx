import React, { useEffect } from 'react'
import Canvas from './Canvas'
import { data } from './data'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  useEffect(() => {
    const scrollEl = document.querySelector('[data-scroll-container]');
  
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1, 
    });
  
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  

  return (
    <>
      <div data-scroll-container className="w-full relative min-h-screen font-['PP', 'Arial', serif]">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <div className='w-full h-screen relative z-[1]'>
          <nav className="w-full bg-gray-800 py-4">
            <ul className="flex justify-center space-x-8">
              {["Home", "About", "Projects", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='textcontainer px-[25%] pt-[4%] mb-[120px]'>
            <div className='text text-white w-[45%] p-0'>
              <h3 className='text-[2.1rem] leading-[1.1] mb-[2rem]'>
                At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.
              </h3>
              <p className='text-[0.8rem] font-normal w-[100%] leading-[1.3] p-0'>
                We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
              </p>
              <p className='text-md mt-10 text-1xl'>
                Scroll
              </p>
            </div>
          </div>
          <div className='w-full pl-[10px] mb-[40px]'>
            <h1 className='text-[234px] text-white font-normal tracking-norma]'>Thirtysixstudio</h1>
          </div>
        </div>
      </div>
      <div data-scroll-container className='w-full relative min-h-screen mt-[200px]'>
      {data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <div className='w-full h-screen pl-[10%] pr-[10%] '>
            <h1 className='text-white font-sans tracking-normal text-[54px] mb-[20px]'>About The Brand</h1>
            <p className='text-white font-normal tracking-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque, earum sunt mollitia nobis vitae ab quidem, error veritatis dignissimos excepturi deserunt tempora illum? Dolorum laborum labore molestias a consequuntur vero illum sequi! Eveniet numquam debitis error assumenda ut sint qui saepe, ducimus perspiciatis expedita sunt voluptate magni soluta inventore praesentium autem exercitationem atque laudantium. In praesentium esse adipisci necessitatibus ut maxime dolorem autem repudiandae quisquam! Eius illum, vitae quis beatae quia quasi fugit obcaecati sed autem ad expedita iusto ut similique ab quo dolores voluptate velit reiciendis veniam suscipit? Accusantium repudiandae aspernatur ullam illo vitae quam nam corrupti soluta quisquam dignissimos laudantium iure ipsam autem et aperiam voluptatem, necessitatibus totam voluptates similique nesciunt laboriosam porro, asperiores, non nulla. Exercitationem temporibus voluptate autem, veritatis nobis amet totam dolore molestias similique quibusdam harum voluptatem eveniet eius sequi ipsa. Error, ea repudiandae cum atque animi nobis vero ut aliquid quam sint tempore nam molestias, fugiat officiis ducimus! Sunt amet fuga tenetur commodi harum repellat, ea nam, assumenda blanditiis odit voluptates quo aliquam quis, nostrum dolor quisquam incidunt nesciunt. Distinctio deserunt, saepe ullam natus, in ducimus explicabo corporis cum incidunt dolores ipsum a! Numquam molestiae laudantium, dolorum nobis, maiores quibusdam magni, soluta quis at error libero distinctio. Voluptates voluptatum fugit tenetur obcaecati unde deleniti sunt sed placeat hic, ea praesentium? Consectetur, illo impedit beatae obcaecati accusamus vero sit, modi maxime adipisci debitis ea dolorem voluptatum? Necessitatibus in laudantium adipisci, odit et non? Labore quod quibusdam vitae maiores dolore voluptas distinctio dolorum cumque nobis obcaecati, ipsum veniam esse neque asperiores sit dolor eos laudantium in, expedita minus necessitatibus nihil perspiciatis. Alias praesentium accusamus atque magni aliquam vel cumque nemo cupiditate, in commodi numquam eaque, rem perferendis et corrupti accusantium? Expedita possimus facilis praesentium ducimus dolore ut earum molestiae ipsum voluptates iusto beatae labore suscipit pariatur modi, amet id, temporibus ad magni laborum. Rem in, cumque dignissimos dolorum esse itaque aspernatur eos veniam, neque optio harum perferendis nesciunt sit repudiandae temporibus asperiores odio rerum, sequi et. Temporibus dignissimos consequuntur autem, cupiditate eveniet obcaecati odit eligendi nisi expedita animi eum. Dolorum ipsum assumenda sit iste libero, eveniet sapiente quod, dolores quas magni at blanditiis magnam eius enim illo earum unde? Cumque, quam. Illo natus eaque iste corrupti, nesciunt ad minus nostrum adipisci reprehenderit expedita consectetur esse doloremque eius. Sint cum eveniet tenetur! Amet quisquam natus illo delectus eligendi. Nisi ipsam ducimus voluptatum aliquid, cum tempore fugiat?</p>
          </div>
      </div>
      <div data-scroll-container className='w-full relative min-h-screen'>
      {data[2].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
      <div className='w-full h-[1000px] flex align-bottom justify-center' >
          <img src="https://images.unsplash.com/photo-1758649863410-2d35a9d36f70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="hello" />
      </div>
      </div>
      <div data-scroll-container className='w-full relative min-h-screen'>
      {data[3].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <div className='w-full h-screen pl-[10%] pr-[10%] '>
          <p className='text-white font-normal tracking-normal text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo ex iste, accusamus cupiditate molestias saepe corrupti optio magni impedit atque, porro esse aliquam perspiciatis ab reiciendis expedita ratione! Itaque mollitia corporis beatae minima laudantium aliquam nulla? Molestias consequatur nulla delectus laborum vitae quod qui dignissimos deleniti repellendus ipsum. Repudiandae voluptates asperiores accusantium quaerat sapiente mollitia non officia odit cupiditate, veritatis nesciunt nam. Nobis impedit praesentium itaque dicta, ab pariatur magnam eligendi, rerum excepturi dolorem ipsa, aperiam aspernatur deserunt dignissimos consequatur provident ex molestiae vitae expedita cum doloremque quaerat sed aut. Animi eius libero, temporibus voluptatibus quaerat illo corporis ipsam accusantium voluptatem quisquam repudiandae fugit, maiores veritatis eaque esse recusandae itaque dicta veniam cupiditate nesciunt. In temporibus cum aspernatur aliquam odio nulla dolorum, cumque, officia nisi voluptate veritatis error sed laudantium voluptatum voluptatibus aut facere et architecto nesciunt omnis dignissimos a eveniet quos maiores! Autem quod dolorum molestiae nihil. Dolorem, error suscipit! Praesentium optio beatae similique perferendis quo fugiat error sequi, quam reiciendis aspernatur, recusandae eaque nobis voluptatum mollitia aliquam nihil rem provident culpa quisquam ullam tenetur. Magnam fugit ratione repudiandae est nostrum eius adipisci maiores ipsam excepturi harum quibusdam fugiat corporis esse impedit, inventore eligendi? Dolores ut deleniti repudiandae, porro, totam cum nihil praesentium dolorum enim, adipisci sequi et vel consequuntur minima alias doloribus? Voluptates dolorem quaerat quae, dolor officiis odio, accusamus modi asperiores debitis quas eaque molestias voluptas unde culpa, provident earum molestiae accusantium reprehenderit? Asperiores aliquam ducimus tenetur! Eveniet nam dolor voluptatem totam at, neque tempore unde exercitationem porro error illo distinctio facere esse vel ullam. Tempore eum, quidem ullam nam id officia dicta voluptate eius reiciendis laboriosam. Ea, saepe fugiat eum velit aliquid explicabo dolore? Incidunt, culpa doloremque hic eos optio aperiam neque esse repellendus enim similique corrupti temporibus. Eligendi beatae recusandae in minus necessitatibus repudiandae facere dolores, asperiores corrupti architecto. Repellendus fuga omnis atque ipsa cumque sit, voluptatibus enim molestias? Consequatur ad fugit saepe voluptatibus eum at blanditiis corporis tempore, in quo possimus sit repudiandae, voluptates consectetur neque ratione! Dolore totam praesentium aspernatur explicabo libero porro tempora cumque possimus, maiores vitae optio mollitia voluptatum voluptates accusamus dolorum incidunt ipsum. Nostrum neque culpa incidunt aspernatur quae. Soluta accusantium dolor dolore dolorem architecto, ad cum nisi tempore ex temporibus ipsam dolores atque porro ratione nam maiores iste laboriosam vero voluptates iusto? Tempore nisi, iusto ad assumenda, ratione eos, cumque officiis quisquam sapiente perspiciatis voluptatibus distinctio suscipit voluptatum aliquid delectus animi facilis. In, deleniti ratione! Sint saepe incidunt, numquam aliquid tempore nisi tenetur perspiciatis odit deleniti ipsam dolor unde eligendi omnis aperiam consequuntur quasi ea officia, velit natus similique corrupti ipsa perferendis. Unde nemo corrupti minus, ducimus ipsum natus obcaecati qui earum facere ea placeat dignissimos ad dolore temporibus itaque. Optio architecto quisquam magni minima blanditiis, nostrum deleniti odio eaque quis necessitatibus expedita impedit consequuntur consequatur laudantium voluptatum beatae recusandae molestiae vero aliquid! Enim, vel reiciendis maxime consequatur unde ipsam dolores corrupti, inventore commodi veritatis obcaecati doloremque asperiores facere nobis eaque exercitationem laborum delectus quidem in fuga. Harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quas voluptatibus ipsum fugiat. Quibusdam exercitationem harum quae quo alias animi laborum possimus, id ut, commodi laudantium inventore iste sunt assumenda enim nam. Natus illo magnam inventore ratione impedit quo sint, aperiam labore maiores? Ex provident rem incidunt rerum reiciendis consequatur voluptas. Modi natus facilis, molestias facere aspernatur recusandae odio tempora minima esse quae maxime iusto eius, doloremque quos minus odit architecto dignissimos laudantium mollitia soluta nostrum. Vitae dolorum laudantium, libero rem asperiores, eaque quibusdam commodi saepe ducimus, dolore ab mollitia tempora a praesentium molestiae dolores consequatur temporibus architecto reiciendis. Laboriosam vitae ipsam dolorum placeat modi eos deleniti et tempore, provident pariatur consectetur, maxime beatae voluptatum vel veritatis nam quaerat. Beatae modi repellendus dolorum quis eligendi deserunt ducimus eveniet saepe, veritatis hic nobis delectus. Aperiam ullam sapiente impedit ipsum, doloremque architecto totam consequuntur praesentium nesciunt sunt sequi laboriosam ipsa ea iure et, nobis explicabo eveniet voluptate exercitationem asperiores nihil repellat officiis illo quos? Repellendus id maiores cumque magnam a. Facilis voluptatibus id accusamus odit ullam? Tempore unde, voluptas veniam pariatur ea corporis quis qui obcaecati sed perspiciatis placeat quidem illum laboriosam sunt hic possimus deleniti? Facere maxime molestiae distinctio minus nostrum impedit facilis. Sed alias fuga quasi ipsum totam accusamus blanditiis, quis laborum saepe eaque aliquam mollitia dolore animi accusantium eum quae qui consectetur quas adipisci rem earum culpa? Quisquam iusto libero, hic officia nobis vero voluptate excepturi earum! Libero aspernatur quasi facere dignissimos odit, qui molestiae modi suscipit minus neque repellendus vero a quas nihil consequuntur tenetur maxime possimus impedit! Qui eveniet labore pariatur in debitis dicta magnam fuga culpa tenetur quod harum nobis dolor vel quae molestiae odio, quaerat facilis dolores dignissimos libero similique? Alias modi consectetur quisquam dicta a esse vitae, ex, architecto provident veritatis debitis illo ullam officiis eaque minima tempore ducimus assumenda, doloremque repellendus natus iusto at voluptates expedita? Quaerat asperiores optio, unde tenetur in assumenda porro corporis sint deserunt quod, ex officia deleniti consequuntur tempora hic rerum natus ratione a. Unde porro quasi eveniet vitae sed a ab et nobis at ratione, aut eius debitis quod recusandae sit. Inventore, harum reprehenderit unde illo quo placeat id consequatur officiis beatae modi atque sapiente minima corrupti iste laudantium consequuntur veniam vitae labore sit. Quidem vitae omnis nemo quis enim repellendus ut alias quae quisquam modi magnam minus fugit, iusto pariatur reiciendis atque itaque consequatur. Expedita dolore autem perspiciatis? Cumque nulla officia, minus ipsam delectus, asperiores aut consequuntur commodi, quia nostrum nam molestiae accusamus nobis deleniti at quis repellat dicta voluptatibus magni. Accusantium ipsum tempore incidunt, nulla iste, modi facilis fugiat velit cum laboriosam, beatae perspiciatis assumenda tempora ut voluptas reprehenderit? Animi deserunt dolorem voluptas saepe magni. Debitis voluptatum quia perspiciatis eaque hic sequi architecto deleniti pariatur consequatur amet corrupti nobis, incidunt quos repellat consectetur in repellendus tempora eligendi ut ducimus velit temporibus culpa beatae maxime? Molestias temporibus in, veniam impedit optio omnis eveniet facilis perspiciatis fugiat vero quod aperiam quo a accusantium nobis minima aut commodi laborum quasi saepe quas assumenda? Culpa quae sed incidunt delectus atque eveniet pariatur officiis amet non ab facilis sapiente natus laudantium animi hic, iure aspernatur cumque consequatur! Fugiat quam, esse recusandae, ipsam eligendi, tempora error quod sit provident asperiores corrupti doloribus. Eos porro quia, sint eveniet officia voluptatum nemo possimus, sunt veniam molestiae eius debitis quo quos dolores reiciendis suscipit voluptatibus minus et ipsam reprehenderit alias ratione quis! Consectetur quia officiis fugit quasi vitae nisi inventore a sapiente, corrupti cum minima, qui iusto cumque ex veniam ipsam accusantium omnis enim numquam assumenda voluptatem? Molestiae incidunt esse dolores nulla minus suscipit voluptates quos nihil, vero maxime porro iusto autem magnam corporis sapiente adipisci? Molestias possimus atque magni deleniti, quasi a quisquam at eum. Nam dolorum ea, iure quae similique voluptas autem? Ea consectetur ab cum illo voluptates incidunt consequatur id deserunt eos, itaque necessitatibus fugit asperiores illum commodi eum aliquid suscipit animi sunt tenetur velit nobis pariatur! Quia rem illo consequatur nesciunt aperiam voluptate recusandae reprehenderit reiciendis ducimus debitis quos esse officia voluptas harum quas vero hic alias dolor quo natus temporibus magni, minus nostrum nobis! Quia in corrupti sit dolorum aut deserunt, sequi cupiditate laudantium placeat excepturi explicabo provident. Alias, quas? Voluptas rerum inventore velit, vitae amet, sint, voluptatem vero repellendus cupiditate a esse quia. Maiores provident delectus quidem nostrum natus non nisi nihil, tenetur molestiae minus? Atque ducimus labore cupiditate doloribus, autem suscipit quam adipisci illo quas fugit provident vel numquam inventore ab! Aliquid commodi dolorum dolores perspiciatis hic, fugit molestiae nulla, sed, obcaecati dolorem deleniti optio unde accusamus? Velit ut repudiandae omnis odio, suscipit at, veniam vel eaque illo nihil asperiores vitae quis quia voluptatem similique aspernatur in quam. Nemo ut veritatis, maxime assumenda numquam optio nulla, fuga explicabo blanditiis nisi a ipsam deleniti libero sint reprehenderit velit, error debitis fugit mollitia porro ad tempora dolore vitae? Cupiditate excepturi hic commodi. Incidunt iste repudiandae debitis fuga nihil saepe culpa impedit dignissimos non eum autem dolor iusto, adipisci ipsam sunt obcaecati dolore sequi odit ab corporis repellendus quia maxime sint ipsum. Ut doloremque, pariatur ipsa, excepturi facere fugit voluptas eaque a labore optio aut eum ullam? Quaerat ad soluta nam nihil facilis totam voluptas ex, quis est adipisci possimus perferendis molestias hic porro, dolores doloribus deleniti tempore fugiat modi. Quasi tempore numquam iusto itaque aspernatur rerum earum iste eos ipsum mollitia fuga aliquid eius sapiente neque, qui optio molestiae distinctio tempora, modi laudantium saepe ab at. Consequatur commodi numquam similique modi fuga nisi hic animi assumenda iste earum ipsum ratione nam cupiditate, officiis iure natus quam, sed sunt omnis sit consequuntur eos illum quia. Dolore hic, perferendis enim odio, voluptates totam blanditiis debitis corrupti ut delectus placeat, consectetur architecto temporibus voluptate eum impedit nulla molestias sunt. Rerum maiores earum dolores veritatis possimus. Aut iure, voluptas, suscipit velit quod nulla enim mollitia eos maiores exercitationem voluptatem provident facilis nemo corporis amet dolorum ratione, dicta fugit nesciunt itaque debitis harum! Dolorem sit nulla, est corporis quis earum voluptas odio dignissimos accusamus molestiae!</p>
        </div>
      </div>
      <div data-scroll-container className='w-full relative min-h-screen'>
      {data[4].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
