var demos = {
  Inheritance: {
    0: {
      title: 'Inherited property',
      htmlFile: 'inheritance/inherited_property/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/dXbEGB?editors=1100',
    },

    1: {
      title: 'Non-inherited property',
      htmlFile: 'inheritance/non_inherited_property/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/YWKbqK?editors=1100',
    },

    2: {
      title: 'Force a non-inherited property to inherity with <code>inherit</code> keyword',
      htmlFile: 'inheritance/force_a_non_inherited_property_with_inherit_keyword/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/qNWGbv?editors=1100',
    },
  },

  Margins: {
    'Block Elements': {
      0: {
        title: 'Have vertical margins',
        htmlFile: 'margins/block_elements/have_vertical_margins/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/EyYzKd?editors=1100',
      },

      1: {
        title: 'Have horizontal margins',
        htmlFile: 'margins/block_elements/have_horizontal_margins/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/QELRNg?editors=1100',
      },

      'Block Inside A Block': {
        'Margin On Outer': {
          0: {
            title: 'Vertical Moves Inner',
            htmlFile: 'margins/block_elements/block_inside_a_block/margin_on_outer/vertical_moves_inner/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/wWwbGo?editors=1100',
          },

          1: {
            title: 'Horizontal Moves Inner',
            htmlFile: 'margins/block_elements/block_inside_a_block/margin_on_outer/horizontal_moves_inner/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/OXLYNX?editors=1100',
          },
        },
      },
    },

    'Inline Elements': {
      0: {
        title: 'Can\'t have vertical margins',
        htmlFile: 'margins/inline_elements/cant_have_vertical_margins/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/VjZOmZ?editors=1100',
      },

      1: {
        title: 'Can have horizontal margins',
        htmlFile: 'margins/inline_elements/can_have_horizontal_margins/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/LZPoRo?editors=1100',
      },
    },

    'Inline-Block Elements': {
      0: {
        title: 'Can have vertical margins',
        htmlFile: 'margins/inline_block_elements/can_have_vertical_margins/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/JKPqRz?editors=1100',
      },

      1: {
        title: 'Can have horizontal margins',
        htmlFile: 'margins/inline_block_elements/can_have_horizontal_margins/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/zBOQKm?editors=1100',
      },
    },

    'Collapsing Margins': {
      'Do collapse': {
        0: {
          title: 'Vertical margins',
          htmlFile: 'margins/collapsing_margins/do_collapse/vertical_margins/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/WxeBxj?editors=1100',
        },

        1: {
          title: '<code>margin-top</code> on first child + nothing between parent and first child',
          htmlFile: 'margins/collapsing_margins/do_collapse/parent_first_child/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/gMYJMP?editors=1100',
        },

        2: {
          title: '<code>margin-bottom</code> on last child + nothing between last child and parent',
          htmlFile: 'margins/collapsing_margins/do_collapse/parent_last_child/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/bebyeg?editors=1100',
        },

        'Cleared elements': {
          0: {
            title: 'Collapses when there\'s nothing to clear',
            htmlFile: 'margins/collapsing_margins/do_collapse/cleared_elements/collapses_when_theres_nothing_to_clear/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/JKPqXx?editors=1100',
          },

          1: {
            title: 'Collapses when there\'s something to clear',
            htmlFile: 'margins/collapsing_margins/do_collapse/cleared_elements/collapses_when_theres_something_to_clear/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/VjZOao?editors=1100',
          },
        },
      },

      'Don\'t collapse': {
        0: {
          title: 'Absolutely positioned elements',
          htmlFile: 'margins/collapsing_margins/dont_collapse/absolutely_positioned_elements/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/KMPLMX?editors=1100',
        },

        1: {
          title: 'Block next to inline',
          htmlFile: 'margins/collapsing_margins/dont_collapse/block_next_to_inline/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/MegdeQ?editors=1100',
        },

        2: {
          title: 'Elements that establish a block formatting context',
          htmlFile: 'margins/collapsing_margins/dont_collapse/elements_that_establish_bfc/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/aZorZQ?editors=1100',
        },

        3: {
          title: 'Empty blocks',
          htmlFile: 'margins/collapsing_margins/dont_collapse/empty_blocks/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/VjZOjo?editors=1100',
        },

        4: {
          title: 'Floated elements',
          htmlFile: 'margins/collapsing_margins/dont_collapse/floated_elements/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/gMYJwP?editors=1100',
        },

        5: {
          title: 'Horizontal margins',
          htmlFile: 'margins/collapsing_margins/dont_collapse/horizontal_margins/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/PzYvGN?editors=1100',
        },

        6: {
          title: 'Root element',
          htmlFile: 'margins/collapsing_margins/dont_collapse/root_element/example.html',
        },
      },

      'Negative margins': {
        0: {
          title: 'One negative margin doesn\'t collapse',
          htmlFile: 'margins/collapsing_margins/negative_margins/one_negative_doesnt_collapse/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/bebywg?editors=1100',
        },

        1: {
          title: 'Two negative collapse to more negative',
          htmlFile: 'margins/collapsing_margins/negative_margins/two_negative_collapse_to_more_negative/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/jrNoML?editors=1100',
        },
      },
    },
  },

  Positioning: {
    '<code>static</code>': {
      '<code>block</code>': {
        0: {
          title: 'Can set <code>width</code>',
          htmlFile: 'positioning/static/block/can_set_width/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/aZorJX?editors=1100',
        },

        1: {
          title: 'Can set <code>height</code>',
          htmlFile: 'positioning/static/block/can_set_height/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/XKrwMx?editors=1100',
        },

        2: {
          title: 'Takes up its own line even when it\'d fit on the previous line',
          htmlFile: 'positioning/static/block/takes_up_its_own_line_even_when_itd_fit_on_the_previous_line/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/VjZObw?editors=1100',
        },

        3: {
          title: 'When there\'s a mix of block and inline children, an anonymous block is generated to contain the inline children',
          htmlFile: 'positioning/static/block/when_mix_of_block_and_inline_children_generate_anonymous_block_to_contain_inline_children/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/GqKamZ?editors=1100',
        },
      },

      '<code>inline</code>': {
        0: {
          title: 'Can\'t set width',
          htmlFile: 'positioning/static/inline/cant_set_width/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/WxeBjE?editors=1100',
        },

        1: {
          title: 'Can\'t set height',
          htmlFile: 'positioning/static/inline/cant_set_height/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/bebyWW?editors=1100',
        },

        'Line boxes are generated': {
          0: {
            title: '<code>line-height</code>',
            htmlFile: 'positioning/static/inline/line_boxes_are_generated/line-height/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/ZOzNKR?editors=1100',
          },

          1: {
            title: '<code>vertical-align</code>',
            htmlFile: 'positioning/static/inline/line_boxes_are_generated/vertical-align/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/xOKNdB?editors=1100',
          },

          2: {
            title: '<code>text-align</code>',
            htmlFile: 'positioning/static/inline/line_boxes_are_generated/text-align/example.html',
            codePen: 'http://codepen.io/adamzerner/pen/XKrwRx?editors=1100',
          },
        },

        'When split over multiple lines': {
          'Applies to only the first and last generated boxes': {
            0: {
              title: 'Horizontal padding',
              htmlFile: 'positioning/static/inline/when_split_over_multiple_lines/applies_to_first_and_last_generated_boxes_only/horizontal_padding/example.html',
              codePen: 'http://codepen.io/adamzerner/pen/QELRVQ?editors=1100',
            },

            1: {
              title: 'Horizontal margins',
              htmlFile: 'positioning/static/inline/when_split_over_multiple_lines/applies_to_first_and_last_generated_boxes_only/horizontal_margins/example.html',
              codePen: 'http://codepen.io/adamzerner/pen/XKrwPG?editors=1100',
            },

            2: {
              title: 'Horizontal borders',
              htmlFile: 'positioning/static/inline/when_split_over_multiple_lines/applies_to_first_and_last_generated_boxes_only/horizontal_borders/example.html',
              codePen: 'http://codepen.io/adamzerner/pen/QELRVQ?editors=1100',
            },
          },

          'Applies to all generated boxes': {
            0: {
              title: 'Vertical padding',
              htmlFile: 'positioning/static/inline/when_split_over_multiple_lines/applies_to_all_generated_boxes/vertical_padding/example.html',
              codePen: 'http://codepen.io/adamzerner/pen/GqKaXN?editors=1100',
            },

            1: {
              title: 'Vertical borders',
              htmlFile: 'positioning/static/inline/when_split_over_multiple_lines/applies_to_all_generated_boxes/vertical_borders/example.html',
              codePen: 'http://codepen.io/adamzerner/pen/LZPoyK?editors=1100',
            },
          },
        },
      },
    },

    '<code>relative</code>': {
      'Moves the element': {
        0: {
          title: 'Block',
          htmlFile: 'positioning/relative/moves_the_element/block/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/vKBwxE?editors=1100',
        },

        1: {
          title: 'Inline',
          htmlFile: 'positioning/relative/moves_the_element/inline/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/gMYJmr?editors=1100',
        },
      },

      '<code>top/right/bottom/left</code>': {
        0: {
          title: 'Is relative to the top-left coordinate of where the element otherwise would be',
          htmlFile: 'positioning/relative/top_right_bottom_left/is_relative_to_top_left_coordinate_of_where_the_element_otherwise_would_be/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/bebZYm?editors=1100',
        },

        1: {
          title: 'Percentages are of the containing block',
          htmlFile: 'positioning/relative/top_right_bottom_left/percentages_are_of_the_containing_block/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/NrKJOJ?editors=1100',
        },
      },

      0: {
        title: 'Negative values work',
        htmlFile: 'positioning/relative/negative_values_work/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/wWwbJg?editors=1100',
      },

      'Other elements think that the relatively positioned element is in it\'s old location': {
        0: {
          title: 'Other elements will overlap the relatively positioned element',
          htmlFile: 'positioning/relative/other_elements_think_that_the_relatively_positioned_element_is_in_its_old_location/other_elements_will_overlap_the_relatively_positioned_element/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/MegdpV?editors=1100',
        },

        1: {
          title: 'Container doesn\'t get expanded',
          htmlFile: 'positioning/relative/other_elements_think_that_the_relatively_positioned_element_is_in_its_old_location/container_doesnt_get_expanded/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/QELRpM?editors=1100',
        },
      },
    },

    '<code>absolute</code>': {
      'Containing block': {
        0: {
          title: 'Not necessarily the parent',
          htmlFile: 'positioning/absolute/containing_block/not_necessarily_the_parent/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/zBOQNm?editors=1100',
        },

        1: {
          title: 'Closest positioned ancestor',
          htmlFile: 'positioning/absolute/containing_block/closest_positioned_ancestor/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/jrNoyG?editors=1100',
        },

        2: {
          title: '<code>&lt;html&gt;</code> when there are no positioned elements',
          htmlFile: 'positioning/absolute/containing_block/html_element_when_no_positioned_ancestors/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/MegdJV?editors=1100',
        },
      },

      '<code>top/right/bottom/left</code>': {
        0: {
          title: 'Relative to the corresponding edge',
          htmlFile: 'positioning/absolute/top_right_bottom_left/is_relative_to_the_corresponding_edge/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/bebZom?editors=1100',
        },

        1: {
          title: 'Percentages are relative to the containing block',
          htmlFile: 'positioning/absolute/top_right_bottom_left/percentages_are_relative_to_the_containing_block/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/ZOzPxE?editors=1100',
        },
      },
    },

    '<code>fixed</code>': {
      0: {
        title: 'Same as <code>absolute</code> except that the containing block is always the viewport',
        htmlFile: 'positioning/fixed/same_as_absolute_except_containing_block_is_always_viewport/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/NrKJJm?editors=1100',
      },
    },
  },

  Floats: {
    'Image with text wrapping': {
      0: {
        title: 'With <code>float</code>',
        htmlFile: 'floats/image_with_text_wrapping/with_float/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/NrKVqd?editors=1100',
      },

      1: {
        title: 'Without <code>float</code>',
        htmlFile: 'floats/image_with_text_wrapping/without_float/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/EyYzje?editors=1100',
      },
    },

    0: {
      title: 'Are positioned at the top-left of the containing element',
      htmlFile: 'floats/are_positioned_at_the_top_left_of_the_containing_element/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/LZPoEa?editors=1100',
    },

    1: {
      title: 'Stop when they hit another floated element',
      htmlFile: 'floats/are_positioned_at_the_top_left_of_the_containing_element/stop_when_they_hit_another_floated_element/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/qNWGEg?editors=1100',
    },

    'When there\'s not enough room on the current line': {
      0: {
        title: 'Move below',
        htmlFile: 'floats/when_theres_not_enough_room_on_the_current_line/move_below/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/ezOapM?editors=1100',
      },

      1: {
        title: 'Only moves as low as it needs to',
        htmlFile: 'floats/when_theres_not_enough_room_on_the_current_line/only_moves_as_low_as_it_needs_to/example.html',
      },
    },

    2: {
      title: 'Inline elements become blocks when floated',
      htmlFile: 'floats/inline_elements_become_blocks_when_floated/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/EyYzVe?editors=1100',
    },

    Margin: {
      0: {
        title: 'Horizontal works',
        htmlFile: 'floats/margins/horizontal_works/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/RRbmWw?editors=1100',
      },

      1: {
        title: 'Vertical works',
        htmlFile: 'floats/margins/vertical_works/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/BzBeoz?editors=1100',
      },

      2: {
        title: 'Negative works',
        htmlFile: 'floats/margins/negative_works/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/PzYvPZ?editors=1100',
      },

      3: {
        title: 'Can cause clearing if elements don\'t all fit on the line after the margins have been applied',
        htmlFile: 'floats/margins/can_cause_clearing_if_elements_dont_fit_on_line_after_margins_applied/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/VjZOLJ?editors=1100',
      },
    },

    3: {
      title: '<code>clear</code>',
      htmlFile: 'floats/clear/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/YWKbPm?editors=1100',
    },

    4: {
      title: 'Elements that come before the floated element in the markup appear normally. They don\'t flow around the floated element',
      htmlFile: 'floats/elements_that_come_before_float_in_markup_dont_flow_around_float/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/GqKaJJ?editors=1100',
    },

    'When an element inside a floated element is wider than the floated element': {
      0: {
        title: 'It doesn\'t expand the floated element',
        htmlFile: 'floats/when_element_inside_floated_element_is_wider_than_floated_element/doesnt_expand_floated_element/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/QELRjv?editors=1100',
      },

      1: {
        title: 'It doesn\'t push neighbors that are floated',
        htmlFile: 'floats/when_element_inside_floated_element_is_wider_than_floated_element/doesnt_push_neighbors_that_are_floated/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/jrNobw?editors=1100',
      },

      2: {
        title: 'It doesn\'t push neighbors that aren\'t floated',
        htmlFile: 'floats/when_element_inside_floated_element_is_wider_than_floated_element/doesnt_push_neighbors_that_arent_floated/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/yJBWYP?editors=1100',
      },
    },

    Gotchas: {
      0: {
        title: 'Container doesn\'t expand to contain floated children (clearfix)',
        htmlFile: 'floats/gotchas/container_doesnt_expand_to_contain_floated_children/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/PzYvqZ?editors=1100',
      },
    },
  },

  '<code>overflow</code>': {
    'Causes of Overflowing': {
      0: {
        title: 'Line Can\'t Be Broken',
        htmlFile: 'overflow/causes_of_overflowing/line_cant_be_broken/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/jrNoVG?editors=1100',
      },

      1: {
        title: 'Child Too Wide For Container',
        htmlFile: 'overflow/causes_of_overflowing/child_too_wide_for_container/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/wWwbog?editors=1100',
      },

      2: {
        title: 'Child Too Tall For Container',
        htmlFile: 'overflow/causes_of_overflowing/child_too_tall_for_container/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/GqKaNo?editors=1100',
      },

      3: {
        title: 'Negative Margins On Child',
        htmlFile: 'overflow/causes_of_overflowing/negative_margins_on_child/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/ZOzNBo?editors=1100',
      },

      4: {
        title: 'Absolute Positioning On Child',
        htmlFile: 'overflow/causes_of_overflowing/absolute_positioning_on_child/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/RRbmoP?editors=1100',
      },

      5: {
        title: 'Relative Positioning On Child',
        htmlFile: 'overflow/causes_of_overflowing/relative_positioning_on_child/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/rLBgWr?editors=1100',
      },

      6: {
        title: '<code>text-indent</code>',
        htmlFile: 'overflow/causes_of_overflowing/text_indent/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/zBOQom?editors=1100',
      },
    },

    Properties: {
      0: {
        title: '<code>visible</code>',
        htmlFile: 'overflow/properties/visible/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/RRbmKP?editors=1100',
      },

      1: {
        title: '<code>hidden</code>',
        htmlFile: 'overflow/properties/hidden/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/oLvRYr?editors=1100',
      },

      2: {
        title: '<code>scroll</code>',
        htmlFile: 'overflow/properties/scroll/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/YWKbNz?editors=1100',
      },
    },

    0: {
      title: 'Need to set on container, not child',
      htmlFile: 'overflow/need_to_set_on_container_not_child/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/qNWGqw?editors=1100',
    },
  },

  '<code>visibility</code>': {
    0: {
      title: 'Hidden takes up space',
      htmlFile: 'visibility/hidden_takes_up_space/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/RRbmqG?editors=1100',
    },
  },

  'Generated Content': {
    '<code>content</code>': {
      0: {
        title: 'doesn\'t work with a normal selector',
        htmlFile: 'generated_content/content/doesnt_work_with_normal_selector/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/QELRyv?editors=1100',
      },

      1: {
        title: 'works on <code>::before</code>',
        htmlFile: 'generated_content/content/works_on_before_pseudo_element/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/XKrwXB?editors=1100',
      },

      2: {
        title: 'works on <code>::after</code>',
        htmlFile: 'generated_content/content/works_on_after_pseudo_element/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/MegdKQ?editors=1100',
      },
    },

    '<code>::before</code> and <code>::after</code>': {
      0: {
        title: 'Are rendered inside of element',
        htmlFile: 'generated_content/before_and_after_pseudo_elements/are_rendered_inside_element/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/VjZOvJ?editors=1100',
      },

      1: {
        title: 'Can be styled',
        htmlFile: 'generated_content/before_and_after_pseudo_elements/can_be_styled/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/GqKaoJ?editors=1100',
      },
    },
  },

  'rem/em': {
    '<code>rem</code>': {
      0: {
        title: 'Based on the <code>font-size</code> of the root element',
        htmlFile: 'rem_em/rem/based_on_root_element/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/dXbEQY?editors=1100',
      },
    },

    '<code>em</code>': {
      'Is based on the <code>font-size</code> of the current element': {
        0: {
          title: 'When the current element\'s <code>font-size</code> is inherited',
          htmlFile: 'rem_em/em/based_on_font_size_of_the_current_element/when_inherited/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/wWwbYr?editors=1100',
        },

        1: {
          title: 'When the current element\'s <code>font-size</code> is set explicitly',
          htmlFile: 'rem_em/em/based_on_font_size_of_the_current_element/when_set_explicitly/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/zBOQmX?editors=1100',
        },
      },
    },

    0: {
      title: 'Can apply to properties other than <code>font-size</code>',
      htmlFile: 'rem_em/can_apply_to_properties_other_than_font_size/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/mEbYzO?editors=1100',
    },
  },

  Background: {
    Visible: {
      0: {
        title: 'In content area',
        htmlFile: 'background/visible/in_content_area/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/bebyNw?editors=1100',
      },

      1: {
        title: 'In padding area',
        htmlFile: 'background/visible/in_padding_area/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/QELRwp?editors=1100',
      },

      2: {
        title: 'Not in border area',
        htmlFile: 'background/visible/not_in_border_area/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/yJBWyz?editors=1100',
      },

      3: {
        title: 'Not in margin area',
        htmlFile: 'background/visible/not_in_margin_area/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/ezOamM?editors=1100',
      },

      4: {
        title: 'Not in position area',
        htmlFile: 'background/visible/not_in_position_area/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/zBOQxL?editors=1100',
      },
    },

    Gaps: {
      0: {
        title: '<code>background-color</code> fills in the gaps in the <code>background-image</code>',
        htmlFile: 'background/gaps/background_color_fills_in_gaps_in_background_image/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/gMYyOQ?editors=1100',
      },

      1: {
        title: 'Inherited <code>background-image</code> fills in gaps in current <code>background-image</code>',
        htmlFile: 'background/gaps/inherited_background_image_fills_in_gaps_in_background_image/example.html',
        codePen: 'http://codepen.io/adamzerner/pen/VjZOwO?editors=1100',
      },
    },

    '<code>background-image</code>': {
      'Intrinsic Dimensions (TODO: find images to use for demos)': {
        0: {
          title: 'Width and height',
          htmlFile: 'background/background-image/intrinsic_dimensions/width_and_height/example.html',
        },

        'Width xor height': {
          0: {
            title: 'Aspect ratio',
            htmlFile: 'background/background-image/intrinsic_dimensions/width_xor_height/aspect_ratio/example.html',
          },

          1: {
            title: 'No aspect ratio',
            htmlFile: 'background/background-image/intrinsic_dimensions/width_xor_height/no_aspect_ratio/example.html',
          },
        },

        'No width or height': {
          0: {
            title: 'Aspect ratio',
            htmlFile: 'background/background-image/intrinsic_dimensions/no_width_or_height/aspect_ratio/example.html',
          },

          1: {
            title: 'No aspect ratio',
            htmlFile: 'background/background-image/intrinsic_dimensions/no_width_or_height/no_aspect_ratio/example.html',
          },
        },
      },

      '<code>background-repeat</code>': {
        0: {
          title: 'Defaults to <code>repeat</code>',
          htmlFile: 'background/background-image/background-repeat/defaults_to_repeat/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/OXLqYr?editors=1100',
        },

        1: {
          title: '<code>no-repeat</code>',
          htmlFile: 'background/background-image/background-repeat/no-repeat/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/KMPEjK?editors=1100',
        },

        2: {
          title: '<code>repeat-x</code>',
          htmlFile: 'background/background-image/background-repeat/repeat-x/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/qNWvzX',
        },

        3: {
          title: '<code>repeat-y</code>',
          htmlFile: 'background/background-image/background-repeat/repeat-y/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/mEboZj?editors=1100',
        },
      },

      '<code>background-position</code>': {
        0: {
          title: 'Length',
          htmlFile: 'background/background-image/background-position/length/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/JKPzqJ?editors=1100',
        },

        1: {
          title: 'Percentage',
          htmlFile: 'background/background-image/background-position/percentage/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/VjZROQ?editors=1100',
        },

        2: {
          title: 'Top-Right-Bottom-Left-Center',
          htmlFile: 'background/background-image/background-position/top_right_bottom_left_center/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/mEboYj?editors=1100',
        },
      },

      '<code>background-size</code>': {
        0: {
          title: 'Length',
          htmlFile: 'background/background-image/background-size/length/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/xOKBvr?editors=1100',
        },

        1: {
          title: 'Percentage',
          htmlFile: 'background/background-image/background-size/percentage/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/YWKgmL?editors=1100',
        },

        2: {
          title: '<code>cover</code>',
          htmlFile: 'background/background-image/background-size/cover/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/KMPEOK?editors=1100',
        },

        3: {
          title: '<code>contain</code>',
          htmlFile: 'background/background-image/background-size/contain/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/BzBbgM?editors=1100',
        },
      },

      '<code>background-attachment</code>': {
        0: {
          title: '<code>scroll</code>',
          htmlFile: 'background/background-image/background-attachment/scroll/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/EyYMzZ?editors=1100',
        },

        1: {
          title: '<code>fixed</code>',
          htmlFile: 'background/background-image/background-attachment/fixed/example.html',
          codePen: 'http://codepen.io/adamzerner/pen/Megxda?editors=1100',
        },
      },
    },

    0: {
      title: 'Defaults to <code>transparent</code>',
      htmlFile: 'background/defaults_to_transparent/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/qNWwBP?editors=1100',
    },

    1: {
      title: 'Overrides parent when set',
      htmlFile: 'background/overrides_parent_when_set/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/mEbYyd?editors=1100',
    },

    2: {
      title: 'Can be a color or an image',
      htmlFile: 'background/can_be_a_color_or_image/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/OXLqKd?editors=1100',
    },
  },

  '<code>white-space</code>': {
    0: {
      title: '<code>normal</code>',
      htmlFile: 'white-space/normal/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/OXLYag?editors=1100',
    },

    1: {
      title: '<code>pre</code>',
      htmlFile: 'white-space/pre/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/yJBWQx?editors=1100',
    },

    2: {
      title: '<code>nowrap</code>',
      htmlFile: 'white-space/nowrap/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/KMPLre?editors=1100',
    },

    3: {
      title: '<code>pre-wrap</code>',
      htmlFile: 'white-space/pre-wrap/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/LZPoME?editors=1100',
    },

    4: {
      title: '<code>pre-line</code>',
      htmlFile: 'white-space/pre-line/example.html',
      codePen: 'http://codepen.io/adamzerner/pen/zBOQMX?editors=1100',
    },
  },
};

angular
  .module('cssDemos')
  .value('demos', demos)
;
