import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <article className="rounded-lg border border-gray-100 bg-white p-6">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">Orders total</p>

      <p className="text-2xl font-medium text-gray-900">€240.00</p>
    </div>

    <span className="rounded-full bg-blue-100 p-3 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </span>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">
    

    <p className="flex gap-2 text-xs">
      <span className="text-gray-500"> Since last week </span>
    </p>
  </div>
</article>

{/* all orders */}

<div className="rounded-lg border border-gray-200">
  <div className="overflow-x-auto rounded-t-lg">
    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Payment method</th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Total spent</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Paypal</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">€120,00</td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Card</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">€100,00</td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Paypal</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">€20,00</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
    <ol className="flex justify-end gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
        2
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  </div>
</div>

    </div>
  )
}

export default Dashboard