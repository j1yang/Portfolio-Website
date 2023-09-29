import React from 'react';

interface FeedbackItem {
  id: number;
  name: string;
  position: string;
  feedback: string;
}

const Feedbacks: React.FC = () => {
  const feedbackData: FeedbackItem[] = [
    {
      id: 1,
      name: 'Cameron Turner',
      position: 'Principal Investigator, VARLab',
      feedback: 'Jaewon is a very strong developer in addition to being a supportive, encouraging, and motivating team member.  We’ve had the chance to let him captain a substantial project over the past term and he has easily and confidently risen to that challenge. Jaewon has been instrumental in helping the vConestoga team grow and the project succeed. He will be missed as a full-time team member when he returns to school next term. '
    },
    {
      id: 2,
      name: 'Rome Khamkeuang',
      position: 'Integrated IT Manager, SMGH and GRH',
      feedback: 'Jaewon has been regarded as a great communicator and team collaborator. He always finds solutions to complex issues. Jaewon\'s eagerness to learn something new also helps him to have better knowledge and experience in supporting multiple levels of users in the organization.'
    },
    
    // Add more feedback items as needed
  ];

  return (
    <div>
      <section id='Feedbacks' className=" text-center w-[300px] mx-auto lg:hidden">
        <h2 className='text-3xl font-extrabold py-4 mt-10'>What Others Say About Me</h2>

        <div className=" ">
          {feedbackData.map(item => (
            <div className=" mt-5  bg-stone-100 p-4 rounded " key={item.id}>
              <p className="">{item.feedback}</p>
              <p className=" text-sm">
                - {item.name}, {item.position}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="hidden text-center w-[850px] mx-auto lg:block">
        <h2 className='text-4xl font-extrabold '>What Others Say About Me</h2>

        <div className=" ">
          {feedbackData.map(item => (
            <div className=" mt-5 bg-stone-100 p-4 rounded" key={item.id}>
              <p className="">{item.feedback}</p>
              <p className=" text-sm">
                - {item.name}, {item.position}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feedbacks;
