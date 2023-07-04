import React from 'react';

interface ContactsProps {
}

const Contacts: React.FC<ContactsProps> = ({ }) => {

  return (
    <section id='Contacts' className='w-[100%] p-10'>
      <h2 className='text-4xl font-extrabold'>Contact me!</h2>
      
    </section>
  );
};

export default Contacts;