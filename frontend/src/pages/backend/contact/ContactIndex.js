import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../LoadingSpinner";
import { useNavigate, Link} from "react-router-dom";
import { FaEdit, FaToggleOn, FaToggleOff, FaTrash } from "react-icons/fa";
import ContactService from "../../../services/ContactService";

const ContactIndex = () => {
  const [contacts, setContacts] = useState([]);
  const [load, setLoad] = useState(true);
  const [reload, setReLoad] = useState(0);
  const [total, setTotal] = useState(0);
  const [statusFilter] = useState(1);
  const navigate = useNavigate();
  const publishedContactCount = contacts.filter(
    (product) => product.status === statusFilter
  ).length;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const result = await ContactService.index();
        setContacts(result.contacts); 
        setTotal(result.total);
        setLoad(false);
      } catch (error) {
        console.error("Error:", error);
        setLoad(false);
      }
    };

    fetchData();
  }, [reload]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const result = await ContactService.destroy(id);
        alert(result.message);
        setReLoad(result.id);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };
 
  const handleStatus = async (id, currentStatus) => {
    if (
      window.confirm(
        "Are you sure you want to change the status of this user?"
      )
    ) {
      try {
        const newStatus = currentStatus === 1 ? 2 : 1;
        const updatedData = { status: newStatus };
        const result = await ContactService.update(updatedData, id);
        alert(result.message);
        setContacts((prevContact) =>
          prevContact.map((contact) =>
          contact.id === id ? { ...contact, status: newStatus } : contact
          )
        );
      } catch (error) {
        console.error("Error updating user status:", error);
      }
    }
  };

  return (
//    
<div class="content">
<section class="content-header my-2">
   <h1 class="d-inline">Liên hệ</h1>
   <div class="row mt-3 align-items-center">
      <div class="col-6">
         <ul class="manager">
         <li>
                        <a href="#st">Tất cả ({total})</a>
                      </li>
                      <li>
                        <a href="#st">Xuất bản ({publishedContactCount })</a>
                      </li>                 
         </ul>
      </div>
      <div class="col-6 text-end">
         <input type="text" class="search d-inline" />
         <button class="d-inline btnsearch">Tìm kiếm</button>
      </div>
   </div>
  
</section>
<section class="content-body my-2">
{load ? <LoadingSpinner /> : ""}

   <table class="table table-bordered">
      <thead>
         <tr>
            <th class="text-center">
               <input type="checkbox" id="checkboxAll" />
                          </th>
                          <th class="text-center">ID</th>

            <th>Họ tên</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Tiêu đề</th>
         </tr>
      </thead>
      <tbody>
      {contacts &&
    contacts.map((contact, index) => (
      <tr className="datarow" key={index}>
        <td className="text-center">
          <input type="checkbox" />
        </td>
        <td className="text-center">{contact.id}</td>
        <td className="text-center">{contact.name}
        <div className="function_style">
            
            <a
              href="#st"
              className="px-1 text-success"
              onClick={() => handleStatus(contact.id, contact.status)}
          >
            
              {contact.status === 1 ? <FaToggleOn /> : <FaToggleOff />}
            </a>
            
            <Link
              to={`/admin/contact/reply/${contact.id}`}
             
            >  Trả lời
              <FaEdit />
            </Link>
            <a
                                href="#st"
                                className="px-1 text-danger"
                                onClick={() => {
                                  handleDelete(contact.id);
                                }}
                              >
                                <FaTrash />
                              </a>
           
          </div></td>

     
        <td>{contact.phone}</td>
        <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }}>{contact.email}</td>
        <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100px' }}>{contact.title}</td>

      </tr>
    ))}
      </tbody>
   </table>

</section>
</div>
  );
};
export default ContactIndex;
