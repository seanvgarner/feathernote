# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  body        :string
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ActiveRecord::Base

  validates :title, :author_id, :notebook_id, presence: true;

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id
  belongs_to :notebook
end
