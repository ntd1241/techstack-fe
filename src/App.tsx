import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Popover from '@radix-ui/react-popover';
import * as Accordion from '@radix-ui/react-accordion';
import * as Toast from '@radix-ui/react-toast';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { VN, US, JP } from 'country-flag-icons/react/3x2';

const Terms = () => (
  <Accordion.Root type='single' collapsible>
    <Accordion.Item value='1' className='focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]'>
      <Accordion.Header>
        <Accordion.Trigger className='w-full text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'>
          <div className="flex-grow flex justify-start">Term #1</div>
          <ChevronDownIcon
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className='text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'>
        <div className="py-[15px] px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value='2' className='focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]'>
      <Accordion.Header>
        <Accordion.Trigger className='w-full text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'>
          <div className="flex-grow flex justify-start">Term #2</div>
          <ChevronDownIcon
            className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className='text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]'>
        <div className="py-[15px] px-5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
)

const AcceptTermCheckbox = () => (
  <form>
    <div className="flex items-center">
      <Checkbox.Root
        className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
        defaultChecked
        id="c1"
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Popover.Root>
        <Popover.Trigger asChild className="pl-[15px] text-[15px] leading-none text-black">
          <div>
            <span>Accept </span>
            <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>terms and conditions.</a>
          </div>
        </Popover.Trigger>
        <Popover.Anchor />
        <Popover.Portal>
          <Popover.Content className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}>
            <div className="flex flex-col gap-2.5">
              <Terms></Terms>
            </div>
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  </form>
)

const CountrySelect = () => (
  <Select.Root>
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      aria-label="Country"
    >
      <Select.Value placeholder="Select a country..." />
      <Select.Icon className="text-violet11">
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.Viewport className="p-[5px]">
          <Select.Item value='VN'>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-6">
                <VN title="Vietnam" />
              </div>
              <Select.ItemText>Vietnam</Select.ItemText>
            </div>
          </Select.Item>
          <Select.Item value='US'>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-6">
                <US title="United States" />
              </div>
              <Select.ItemText>United States</Select.ItemText>
            </div>
          </Select.Item>
          <Select.Item value='JP'>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-6">
                <JP title="Japan" />
              </div>
              <Select.ItemText>Japan</Select.ItemText>
            </div>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const MyToast = () => {
  const [open, setOpen] = React.useState(false);

  return (
  <Toast.Provider swipeDirection="right">
    <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default" onClick={() => setOpen(true)}>
          Hit Me
        </button>
    <Toast.Root className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={open}
          onOpenChange={setOpen}>
      <Toast.Title className='[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]'>Learn FE Tech Stack</Toast.Title>
      <Toast.Description asChild>
        <div>Successfully!</div>
      </Toast.Description>
      <Toast.Close />
    </Toast.Root>
    <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
  </Toast.Provider>
)};

const TabsLoginRegister = () => (
  <Tabs.Root
    className="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2"
    defaultValue="tab-login"
  >
    <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab-login"
      >
        Login
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab-register"
      >
        Register
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab-login"
    >
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="login-username">
          Username
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="login-username"
          placeholder="Username"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="login-password">
          Password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="login-password"
          type='password'
          placeholder='Password'
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <MyToast/>
      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab-register"
    >
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="register-email">
          Email
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="register-email"
          placeholder="Email"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="register-username">
          Username
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="register-username"
          placeholder="Username"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="register-password">
          Password
        </label>
        <input
          className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="register-password"
          type='password'
          placeholder='Password'
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="register-country">
          Country
        </label>
        <CountrySelect></CountrySelect>
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <AcceptTermCheckbox />
      </fieldset>
      <div className="flex justify-end mt-5">
        <MyToast/>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

function App() {
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <TabsLoginRegister></TabsLoginRegister>
      </div>
    </div>
  );
}

export default App;
