export default function AgentWindow() {
  return (
    <div className="relative bg-white rounded-xl shadow-xl w-[400px] overflow-hidden">
      
      {/* Header */}
      <div className="flex gap-22 items-center border-b px-4 py-3 bg-gray-50">
        <img src="images/logoIcon.png" alt="Logo" className="w-6 h-6"/>
        <h2 className="font-medium text-gray-800">Create new agent</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center py-2">
        <div className="flex bg-gray-100 rounded-2xl p-1 w-95 h-8 gap-8 items-center justify center">
          <div className="px-10 py-1 text-sm font-medium text-orange-500 bg-white rounded-lg shadow">
            Chat
          </div>
          <div className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 rounded-lg">
            Voice
          </div>
          <div className="px-4 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 rounded-lg">
            Multi-modal
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 text-sm">
        <p className="font-medium text-gray-800">Add training documents</p>
        <p className="text-gray-500 mb-4">Attach files to give your agent business context</p>

        {/* Upload box */}
        <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 text-sm">
          <div className="flex justify-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
          </div>
          Drag files here or click to browse
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3 px-4 py-3 bg-gray-50">
        <div className="text-gray-500">Cancel</div>
        <div className="bg-black text-white rounded-full px-4 py-1 font-medium">Create agent</div>
      </div>

    </div>
  );
}
