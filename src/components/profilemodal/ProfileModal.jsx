import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}>
      <form action='' className='info-form'>
        <h3>Your info</h3>
        <div>
          <input
            type='text'
            className='info-input' 
            name='firstname'
            placeholder='First Name'
          />
          <input
            type='text'
            className='info-input'
            name='lastname'
            placeholder='Last Name'
          />
        </div>
        <div>
          <input
            type='text'
            className='info-input'
            name='worksat'
            placeholder='Works At'
          />
        </div>
        <div>
          <input
            type='text'
            className='info-input'
            name='livesin'
            placeholder='lives In'
          />
          <input
            type='text'
            className='info-input'
            name='country'
            placeholder='Country'
          />
        </div>
        <div>
          <input
            type='text'
            className='info-input'
            name='relationshipstatus'
            placeholder='Relationship Status'
          />
        </div>
        <div>
          <input
            type='file'
            className='info-input'
            name='profileimage'
            placeholder='profile Image'
          />
          <input
            type='file'
            className='info-input'
            name='coverimage'
            placeholder='Cover Image'
          />
        </div>
        <button className='btn info-button'>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
