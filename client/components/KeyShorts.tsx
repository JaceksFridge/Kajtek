import React from 'react'
import IconKeyboard from '@/icons/IconKeyboard'
import ButtonIcon from './ButtonIcon'

const KeyShorts = () => {
  return (
    <div id="key-shorts" className="absolute z-30 top-32 right-1/4 left-1/4 w-1/2 h-96 bg-white border border-gray rounded-lg">
      <div id="short-top" className="w-full h-20 px-6 flex items-center gap-4">
        <IconKeyboard />
        <h4 className="">Keyboard shortcuts</h4>
      </div>
      <div id="border" className="bg-gray-100 h-[1px]"></div>
      <div id="shorts-main" className="flex px-6 py-6 gap-8">
        <div id="right-half" className="w-full">
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                        <div className="h-8 w-16 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
            </div>
            <div id="right-half" className="w-full">
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                        <div className="h-8 w-16 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
                <div id="shortcut" className="w-full py-4 flex-1 flex justify-between items-center">
                    <p>Open new chat</p>
                    <div id="icon-block" className="flex gap-2">
                        <div className="h-8 w-8 grid place-items-center rounded border border-gray"><IconKeyboard /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KeyShorts
