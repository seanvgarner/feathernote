# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ActiveRecord::Base

  validates :title, :author, presence: true

  belongs_to :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id

  has_many :notes,
    class_name: 'Note',
    primary_key: :id,
    foreign_key: :notebook_id,
    dependent: :destroy
end
