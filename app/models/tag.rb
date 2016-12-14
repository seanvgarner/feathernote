# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :name, :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    class_name: "User",
    foreign_key: :author_id

  has_many :taggings,
    primary_key: :id,
    class_name: 'Tagging',
    foreign_key: :tag_id,
    dependent: :destroy

  has_many :notes,
    through: :taggings,
    source: :note

end
