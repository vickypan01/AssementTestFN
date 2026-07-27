import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxhooks";
import { addComment } from "../../services/workFlow_slice";
import { MessageSquare, Send } from "lucide-react";

const ApprovalComments = () => {
  const dispatch = useAppDispatch();

  const comments = useAppSelector((state) => state.approval.comments);

  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (!comment.trim()) return;

    dispatch(addComment(comment));

    setComment("");
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <MessageSquare className="text-blue-600" />

        <h2 className="text-xl font-semibold">Approval Comments</h2>
      </div>

      <div className="max-h-80 space-y-4 overflow-y-auto">
        {comments.map((item) => (
          <div key={item.id} className="rounded-lg border bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.user}</h3>

              <span className="text-xs text-gray-500">{item.date}</span>
            </div>

            <p className="mt-2 text-gray-600">{item.message}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comments..."
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={handleAddComment}
          className="mt-4 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          <Send size={18} />
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default ApprovalComments;
